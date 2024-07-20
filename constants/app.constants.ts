import CEOAvatar from "@/public/ceo-avatar.jpeg";
import HaAnh from "@/public/HaAnh.jpg";
import HoangOanh from "@/public/HoangOanh.jpg";
import VietAnh from "@/public/VietAnh.jpg";
import YenChi from "@/public/YenChi.jpg";
import MinhBang from "@/public/MinhBang.jpg";
import NoAvatar from "@/public/no-avatar.png";
export enum RoutesEnum {
  HOME = "/",
  INTRODUCE = "/gioi-thieu",
  COMPLETED = "/du-an",
  QUY_TRINH_THIET_KE = "/quy-trinh-thiet-ke",
  BAO_GIA = "/bao-gia",
  CHINH_SACH = "/chinh-sach",
  LIEN_HE = "/lien-he",
  CHUNG_CU = "/chung-cu",
  BIET_THU = "/biet-thu",
  KHACH_SAN = "/khach-san-coffee",
  SHOP = "/cua-hang",
  VAN_PHONG = "/van-phong",
  NHA_PHO = "/nha-pho",
  NHA_HANG = "/nha-hang",
  THUC_TE = "/du-an-da-hoan-thanh",
  SAN_VUON = "/san-vuon",
  NHA_THO = "/nha-tho",
  SAN_PHAM = "/san-pham",
}

export const INTRODUCE_DROPDOWN = [
  {
    label: "Tầm nhìn",
    description:
      "Trong giai đoạn 5 năm tới, Echo Design định hướng phát triển trở thành công ty thiết kế và thi công kiến trúc nội thất trong top 10 miền Bắc. Chúng tôi sẽ mở rộng phát triển tại các tỉnh thành phố lớn như: TP Hồ Chí Minh, Đà Nẵng, Hải Phòng, Hải Dương, Thanh Hóa, Quảng Ninh, ... Ngoài mục tiêu phát triển chuyên sâu về thiết kế và xây dựng hoàn thiện, chúng tôi cũng hướng tới các lĩnh vực kính doanh bán lẻ, quản lý dự án và cung cấp giải pháp công nghệ mới để nâng tầm chất lượng cuộc sống cho khách hàng.",
  },
  {
    label: "Sứ mệnh",
    description:
      "Sứ mệnh của chúng tôi là từng bước tạo ra những không gian sống, làm việc, vui chơi, học tập và sinh hoạt mang lại trải nghiệm trọn vẹn, tạo nên giá trị và cảm xúc cho quý khách hàng.",
  },
  {
    label: "Tầm nhìn",
    description:
      "Trong giai đoạn 5 năm tới, Echo Design định hướng phát triển trở thành công ty thiết kế và thi công kiến trúc nội thất trong top 10 miền Bắc. Chúng tôi sẽ mở rộng phát triển tại các tỉnh thành phố lớn như: TP Hồ Chí Minh, Đà Nẵng, Hải Phòng, Hải Dương, Thanh Hóa, Quảng Ninh, ... Ngoài mục tiêu phát triển chuyên sâu về thiết kế và xây dựng hoàn thiện, chúng tôi cũng hướng tới các lĩnh vực kính doanh bán lẻ, quản lý dự án và cung cấp giải pháp công nghệ mới để nâng tầm chất lượng cuộc sống cho khách hàng.",
  },
];

export const CEO_INTRODUCE = [
  {
    name: "Nguyễn Minh Quang",
    role: "Founder - CEO",
    image: CEOAvatar,
  },
  {
    name: "Nguyễn Thị Hà Anh",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: HaAnh,
  },
  {
    name: "Phạm Việt Anh",
    role: "Kiến trúc sư",
    image: VietAnh,
  },
  {
    name: "Bùi Thị Yến Chi",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: YenChi,
  },
  {
    name: "Lê Minh Bàng",
    role: "Sale & Marketing",
    image: MinhBang,
  },
  {
    name: "Nguyễn Văn Giang",
    role: "Quản lý dự án",
    image: NoAvatar,
  },
  {
    name: "Nguyễn Thị Hoàng Oanh ",
    role: "Chuyên viên thiết kế nội thất - kỹ thuật",
    image: HoangOanh,
  },
];

export const FACEBOOK_LINK =
  "https://www.facebook.com/ed.interior.architecture";

export const IFRAME_GOOGLE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.608487876321!2d105.95523956818045!3d20.971139739276865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135af0006c828eb%3A0x8c582e957e64ca8a!2zS2h1IHThuq1wIHRo4buDIGxpw6puIGPGoQ!5e0!3m2!1svi!2s!4v1721315385334!5m2!1svi!2s";

export const dropdownMenuItems = [
  {
    href: RoutesEnum.CHUNG_CU,
    label: "Thiết kế nội thất chung cư",
  },
  {
    href: RoutesEnum.BIET_THU,
    label: "Thiết kế nội thất biệt thự, nhà đất",
  },
  {
    href: RoutesEnum.VAN_PHONG,
    label: "Thiết kế nội thất văn phòng",
  },
  {
    href: RoutesEnum.KHACH_SAN,
    label: "Thiết kế nhà hàng, khách sạn, coffee",
  },
  {
    href: RoutesEnum.SAN_VUON,
    label: "Thiết kế kiến trúc, sân vườn",
  },
  {
    href: RoutesEnum.NHA_THO,
    label: "Thiết kế nhà thờ",
  },
];
