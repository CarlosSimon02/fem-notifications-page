(function () {
  const unreadNotifItemClassName = "js-unread-notif-item";
  const notifItemClassName = "js-notif-item";

  const unreadNotifCount = document.querySelector(".js-unread-notif-count");
  const links = document.querySelectorAll(".js-link");
  const markAllAsReadLink = document.querySelector(".js-mark-all-as-read");

  const getUnreadNotifItems = function () {
    return document.querySelectorAll(`.${unreadNotifItemClassName}`);
  };

  const displayunreadNotifCount = function () {
    const unreadNotifItems = getUnreadNotifItems();
    unreadNotifCount.innerHTML = unreadNotifItems.length;
  };

  const removeNotifItemFromUnread = function () {
    //navigate up the DOM, when notification item found
    var ancestorItem = this.parentNode;
    while (ancestorItem !== null) {
      if (ancestorItem.classList.contains(notifItemClassName)) {
        ancestorItem.classList.remove(unreadNotifItemClassName);
        displayunreadNotifCount();
        break;
      }
      ancestorItem = ancestorItem.parentNode;
      if (ancestorItem === null) return;
    }
  };

  const markAllAsRead = function () {
    const unreadNotifItems = getUnreadNotifItems();
    unreadNotifItems.forEach((item) => {
      item.classList.remove(unreadNotifItemClassName);
    });
  };

  document.addEventListener("DOMContentLoaded", displayunreadNotifCount);
  markAllAsReadLink.addEventListener("click", markAllAsRead);

  links.forEach((link) => {
    link.addEventListener("click", removeNotifItemFromUnread);
  });
})();
