import PreviewView from "./previewView.js";

class BookmarksView extends PreviewView {
  _parentElement = document.querySelector(".bookmarks");
  _errorMessage = "No bookmarks yet. Find nice recipe and bookmarked it.";
  _message = "";

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new BookmarksView();
