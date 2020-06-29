import {notification, contact} from "./../services/index";

let getHome = async (req, res) => {
  // only 10 items one time 
  let notifications = await notification.getNotifications(req.user._id);
  // get amount notifications unread
  let countNotifUnread = await notification.countNotifUnread(req.user_id);

  // get contacts (10 item one time)
  let contacts = await contact.getContacts(req.user._id);

  // get contacts sent (10 item one time)
  let contactsSent = await contact.getContactsSent(req.user._id);

  // get contacts received (10 item one time)
  let contactsReceived = await contact.getContactsReceived(req.user._id);

  return res.render("main/home/home", {
    errors: req.flash("errors"),
    success: req.flash("success"),
    user: req.user,
    notifications: notifications,
    countNotifUnread: countNotifUnread,
    contacts: contacts,
    contactsSent: contactsSent,
    contactsReceived: contactsReceived
  });
};
module.exports = {
  getHome: getHome
};