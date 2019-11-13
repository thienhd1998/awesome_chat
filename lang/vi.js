export const transValidation = {
  email_incorrect: "Email phaỉ có dạng example@nkthien.com!",
  gender_incorrect: "Giới tính thứ 3 ????",
  password_incorrect: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác"
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống. Nếu tin điều này là hiểu lầm thì hãy liên hệ với bộ phận hỗ trợ của chúng tôi!!!",
  account_not_active: "Email này đã được đăng ký nhưng chưa active tài khoản, vui lòng kiểm tra lại email của bạn."
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để active`;
  }
};