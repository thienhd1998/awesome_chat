export const transValidation = {
  email_incorrect: "Email phaỉ có dạng example@nkthien.com!",
  gender_incorrect: "Giới tính thứ 3 ????",
  password_incorrect: "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác",
  update_username: "Username giới hạn trong khoảng 3-17 ký tự và không được phép chứa các ký tự đặc biệt",
  update_gender: "Opps! Dữ liệu giới tính có vấn đề, bạn sửa inspect chăng?",
  update_address: "Địa chỉ phải nằm trong khoảng 3-30 ký tự",
  update_phone: "Số điện thoại Việt Nam bắt đầu từ 0, giới hạn trong khoảng 10-11 ký tự",
  keyword_find_user: "Lỗi từ khóa tìm kiếm chỉ cho phép ký tự chữ cái và số, cho phép khoảng trống"
};

export const transErrors = {
  account_in_use: "Email này đã được sử dụng.",
  account_removed: "Tài khoản này đã bị gỡ khỏi hệ thống. Nếu tin điều này là hiểu lầm thì hãy liên hệ với bộ phận hỗ trợ của chúng tôi!!!",
  account_not_active: "Email này đã được đăng ký nhưng chưa active tài khoản, vui lòng kiểm tra lại email của bạn.",
  account_undefined: "Tài khoản không tồn tại.",
  token_undefined: "Token không tồn tại!",
  login_failed: "Sai tài khoản hoặc mật khẩu!!!",
  sever_error: "Có lỗi ở phía server, vui lòng liên hệ với bộ phận hỗ trợ của chúng tôi để báo cáo lỗi này, xin cảm ơn",
  avatar_type: "Kiểu file không hợp lệ, chỉ chấp nhận jpg & png",
  avartar_size: "Ảnh tối đa cho phép là 1MB",
  user_current_password_failed: "Mật khẩu hiện tại không chính xác"
};

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tài khoản <strong>${userEmail}</strong> đã được tạo, vui lòng kiểm tra email của bạn để active`;
  },
  account_active: "Kích hoạt tài khoản thành công! Đã cso thể đăng nhập vào ứng dụng",
  loginSuccess: (username) => {
    return `Xin chào ${username}, chúc bạn một ngày tốt lành`;
  },
  logout_success: "Đăng xuất tài khoản thành công, hẹn gặp lại bạn",
  user_info_updated: "Cập nhật thông tin người dùng thành công",
  user_password_updated: "Cập nhật mật khẩu thành công"
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