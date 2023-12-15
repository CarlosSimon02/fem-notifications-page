(function () {
  const unreadNotifItemClassName = "content__list__item--unread-notification";
  const notifItemClassName = "content__list__item";
  const unreadNotifsCount = document.querySelector(
    ".content__top__title__unread-notif-count"
  );
  const links = document.querySelectorAll(".link");

  const displayUnreadNotifsCount = function () {
    unreadNotifsItems = document.querySelectorAll(
      `.${unreadNotifItemClassName}`
    );
    unreadNotifsCount.innerHTML = unreadNotifsItems.length;
  };

  const removeNotifItemFromUnread = function () {
    //navigate up the DOM, when notification item found
    var ancestorItem = this.parentNode;
    while (ancestorItem !== null) {
      if (ancestorItem.classList.contains(notifItemClassName)) {
        ancestorItem.classList.remove(unreadNotifItemClassName);
        displayUnreadNotifsCount();
        break;
      }
      ancestorItem = ancestorItem.parentNode;
      if (ancestorItem === null) return;
    }
  };

  document.addEventListener("DOMContentLoaded", displayUnreadNotifsCount);
  links.forEach((link) => {
    link.addEventListener("click", removeNotifItemFromUnread);
  });
})();
