import os
from notion.client import NotionClient

notion_url = os.getenv("NOTION_URL")
notion_token = os.getenv("NOTION_TOKEN")
filter_query = {
    "type": "checkbox",
    "value": "Yes",
    "property": "published",
    "comparator": "checkbox_is",
}


def serialise_page(page):
    return {"title": page.name, "created_at": page.created, "slug": page.slug}


def get_collection():
    client = NotionClient(token_v2=notion_token, monitor=False)
    return client.get_collection_view(notion_url)


def get_published_pages(collection):
    return collection.build_query(filter=[filter_query]).execute()


def find_page(collection, slug):
    result = collection.build_query(
        filter=[
            filter_query,
            {
                "type": "text",
                "value": slug,
                "property": "slug",
                "comparator": "string_is",
            },
        ]
    ).execute()

    if not result:
        return None
    return result[0]


__custom_keys = {"image": ["source", "full_width", "caption"]}


def __get_block_keys(block):
    raw_keys = list(block.__class__.__dict__.keys())
    key_map = filter(lambda attr: not attr.startswith("_"), raw_keys)

    custom_keys = __custom_keys.get(block.type, [])
    return list(key_map) + custom_keys


def serialise_block(block):
    keys = __get_block_keys(block)
    attrs = {k: getattr(block, k) for k in keys if not callable(getattr(block, k))}
    base = {"type": block.type}
    if attrs:
        base["attributes"] = attrs

    return base


def serialise_children(block):
    children = list(map(serialise_children, block.children))
    if block.type == "page":
        return children

    attrs = serialise_block(block)
    if children:
        attrs["children"] = children
    if hasattr(block, "title"):
        attrs["content"] = block.title

    return attrs
