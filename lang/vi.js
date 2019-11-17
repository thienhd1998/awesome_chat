export const transValidation = {
  email_incorrect: "Email phaỉ có dạng example@nkthien.com!",
  gender_incorrect: "Giới tính thứ 3 ????",
  password_incorrect: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác"
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống. Nếu tin điều này là hiểu lầm thì hãy liên hệ với bộ phận hỗ trợ của chúng tôi!!!",
  account_not_active: "Email này đã được đăng ký nhưng chưa active tài khoản, vui lòng kiểm tra lại email của bạn.",
  token_undefined: "Token không tồn tại!",
  login_failed: "Sai tài khoản hoặc mật khẩu!!!",
  sever_error: "Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi để báo cáo lỗi này, xin cảm ơn"
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để active`;
  },
  account_active: "Kích hoạt tài khoản thành công! Đã cso thể đăng nhập vào ứng dụng",
  loginSuccess: (username) => {
    return `Xin chào ${username}, chúc bạn một ngày tốt lành`;
  },
  logout_success: "Đăng xuất tài khoản thành công, hẹn gặp lại bạn"
};

export const transMail = {
  subject: "Awesome Chat: Xác nhận kích hoạt tài khoản",
  template: (linkVerrify) => {
    return `
      <h2>Bạn nhận được email này vì đã đăng ký tài khoản trên ứng dụng Awesome Chat</h2>
      <h3>Vui lòng click vào liên kết bên dưới để vui lòng kích hoạt tài khoản</h3>
      <h3><a href="${linkVerrify}" target="blank">${linkVerrify}</h3>
      <h4>Nếu tin rằng email này là nhầm lẫn hãy bỏ qua nó. Trân trọng</h4>
    `;
  },
  send_failed: "Có lỗi trong quá trình gửi email, vui lòng liên hệ bộ phận hỗ trợ của chúng tôi"
};