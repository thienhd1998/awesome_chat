import ContactModel from "./../models/contactModel";
import UserModel from "./../models/userModel";
import _ from "lodash";

let findUsersContact = (currentUserId, keyword) => {
  return new Promise(async (resolve, reject) => {
    let deprecateduserIds = [];
    let contactsByUser = await ContactModel.findAllByUser(currentUserId);
    contactsByUser.forEach((contact) => {
      deprecateduserIds.push(contact.userId);
      deprecateduserIds.push(contact.contactId);
    });
    deprecateduserIds = _.uniqBy(deprecateduserIds);
    let users = await UserModel.findAllForAddContact(deprecateduserIds, keyword);
    resolve(users);
  });
};

module.exports = {
  findUsersContact: findUsersContact
};