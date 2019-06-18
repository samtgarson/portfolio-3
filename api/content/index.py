from flask import Flask, Response, jsonify
from utils import (
    get_collection,
    serialise_page,
    serialise_children,
    find_page,
    get_published_pages,
)

app = Flask(__name__)
app.url_map.strict_slashes = False


@app.route("/api/content/")
def index():
    collection = get_collection()
    published_pages = get_published_pages(collection)
    pages = map(serialise_page, published_pages)

    return jsonify(list(pages))


@app.route("/api/content/<string:slug>")
def show(slug):
    collection = get_collection()
    result = find_page(collection, slug)

    if not result:
        return jsonify({"error": "Post not found"}), 404

    children = serialise_children(result)
    return jsonify({**serialise_page(result), "children": children})


@app.route("/<path:path>")
def catch_all(path):
    return jsonify({"error": "Route not found"}), 404
