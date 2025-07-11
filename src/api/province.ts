import { Province } from "../interfaces/provinceInterface";

// List province data
const provinces: Province[] = [
  {
    id: 1,
    code: "01",
    name: "Thành phố Hà Nội",
    codename: "thanh_pho_ha_noi",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường Hoàn Kiếm",
        codename: "phuong_hoan_kiem",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Cửa Nam",
        codename: "phuong_cua_nam",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Ba Đình",
        codename: "phuong_ba_đinh",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường Ngọc Hà",
        codename: "phuong_ngoc_ha",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Giảng Võ",
        codename: "phuong_giang_vo",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Hai Bà Trưng",
        codename: "phuong_hai_ba_trung",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Vĩnh Tuy",
        codename: "phuong_vinh_tuy",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Bạch Mai",
        codename: "phuong_bach_mai",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Đống Đa",
        codename: "phuong_đong_đa",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Kim Liên",
        codename: "phuong_kim_lien",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Văn Miếu - Quốc Tử Giám",
        codename: "phuong_van_mieu_-_quoc_tu_giam",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường Láng",
        codename: "phuong_lang",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường Ô Chợ Dừa",
        codename: "phuong_o_cho_dua",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Hồng Hà",
        codename: "phuong_hong_ha",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Lĩnh Nam",
        codename: "phuong_linh_nam",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường Hoàng Mai",
        codename: "phuong_hoang_mai",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Vĩnh Hưng",
        codename: "phuong_vinh_hung",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Tương Mai",
        codename: "phuong_tuong_mai",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Định Công",
        codename: "phuong_đinh_cong",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Hoàng Liệt",
        codename: "phuong_hoang_liet",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Phường Yên Sở",
        codename: "phuong_yen_so",
        division_type: "phường",
      },

      {
        id: 22,
        name: "Phường Thanh Xuân",
        codename: "phuong_thanh_xuan",
        division_type: "phường",
      },

      {
        id: 23,
        name: "Phường Khương Đình",
        codename: "phuong_khuong_đinh",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Phường Phương Liệt",
        codename: "phuong_phuong_liet",
        division_type: "phường",
      },

      {
        id: 25,
        name: "Phường Cầu Giấy",
        codename: "phuong_cau_giay",
        division_type: "phường",
      },

      {
        id: 26,
        name: "Phường Nghĩa Đô",
        codename: "phuong_nghia_đo",
        division_type: "phường",
      },

      {
        id: 27,
        name: "Phường Yên Hòa",
        codename: "phuong_yen_hoa",
        division_type: "phường",
      },

      {
        id: 28,
        name: "Phường Tây Hồ",
        codename: "phuong_tay_ho",
        division_type: "phường",
      },

      {
        id: 29,
        name: "Phường Phú Thượng",
        codename: "phuong_phu_thuong",
        division_type: "phường",
      },

      {
        id: 30,
        name: "Phường Tây Tựu",
        codename: "phuong_tay_tuu",
        division_type: "phường",
      },

      {
        id: 31,
        name: "Phường Phú Diễn",
        codename: "phuong_phu_dien",
        division_type: "phường",
      },

      {
        id: 32,
        name: "Phường Xuân Đỉnh",
        codename: "phuong_xuan_đinh",
        division_type: "phường",
      },

      {
        id: 33,
        name: "Phường Đông Ngạc",
        codename: "phuong_đong_ngac",
        division_type: "phường",
      },

      {
        id: 34,
        name: "Phường Thượng Cát",
        codename: "phuong_thuong_cat",
        division_type: "phường",
      },

      {
        id: 35,
        name: "Phường Từ Liêm",
        codename: "phuong_tu_liem",
        division_type: "phường",
      },

      {
        id: 36,
        name: "Phường Xuân Phương",
        codename: "phuong_xuan_phuong",
        division_type: "phường",
      },

      {
        id: 37,
        name: "Phường Tây Mỗ",
        codename: "phuong_tay_mo",
        division_type: "phường",
      },

      {
        id: 38,
        name: "Phường Đại Mỗ",
        codename: "phuong_đai_mo",
        division_type: "phường",
      },

      {
        id: 39,
        name: "Phường Long Biên",
        codename: "phuong_long_bien",
        division_type: "phường",
      },

      {
        id: 40,
        name: "Phường Bồ Đề",
        codename: "phuong_bo_đe",
        division_type: "phường",
      },

      {
        id: 41,
        name: "Phường Việt Hưng",
        codename: "phuong_viet_hung",
        division_type: "phường",
      },

      {
        id: 42,
        name: "Phường Phúc Lợi",
        codename: "phuong_phuc_loi",
        division_type: "phường",
      },

      {
        id: 43,
        name: "Phường Hà Đông",
        codename: "phuong_ha_đong",
        division_type: "phường",
      },

      {
        id: 44,
        name: "Phường Dương Nội",
        codename: "phuong_duong_noi",
        division_type: "phường",
      },

      {
        id: 45,
        name: "Phường Yên Nghĩa",
        codename: "phuong_yen_nghia",
        division_type: "phường",
      },

      {
        id: 46,
        name: "Phường Phú Lương",
        codename: "phuong_phu_luong",
        division_type: "phường",
      },

      {
        id: 47,
        name: "Phường Kiến Hưng",
        codename: "phuong_kien_hung",
        division_type: "phường",
      },

      {
        id: 48,
        name: "Phường Thanh Liệt",
        codename: "phuong_thanh_liet",
        division_type: "phường",
      },

      {
        id: 49,
        name: "Phường Chương Mỹ",
        codename: "phuong_chuong_my",
        division_type: "phường",
      },

      {
        id: 50,
        name: "Phường Sơn Tây",
        codename: "phuong_son_tay",
        division_type: "phường",
      },

      {
        id: 51,
        name: "Phường Tùng Thiện",
        codename: "phuong_tung_thien",
        division_type: "phường",
      },

      {
        id: 52,
        name: "Xã Thanh Trì",
        codename: "xa_thanh_tri",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Đại Thanh",
        codename: "xa_đai_thanh",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Nam Phù",
        codename: "xa_nam_phu",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Ngọc Hồi",
        codename: "xa_ngoc_hoi",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Thượng Phúc",
        codename: "xa_thuong_phuc",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Thường Tín",
        codename: "xa_thuong_tin",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Chương Dương",
        codename: "xa_chuong_duong",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Hồng Vân",
        codename: "xa_hong_van",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Phú Xuyên",
        codename: "xa_phu_xuyen",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Phượng Dực",
        codename: "xa_phuong_duc",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Chuyên Mỹ",
        codename: "xa_chuyen_my",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Đại Xuyên",
        codename: "xa_đai_xuyen",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Thanh Oai",
        codename: "xa_thanh_oai",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Bình Minh",
        codename: "xa_binh_minh",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Tam Hưng",
        codename: "xa_tam_hung",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Dân Hòa",
        codename: "xa_dan_hoa",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Vân Đình",
        codename: "xa_van_đinh",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Ứng Thiên",
        codename: "xa_ung_thien",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Hòa Xá",
        codename: "xa_hoa_xa",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Ứng Hòa",
        codename: "xa_ung_hoa",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Mỹ Đức",
        codename: "xa_my_đuc",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Hồng Sơn",
        codename: "xa_hong_son",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Phúc Sơn",
        codename: "xa_phuc_son",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Hương Sơn",
        codename: "xa_huong_son",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Phú Nghĩa",
        codename: "xa_phu_nghia",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Xuân Mai",
        codename: "xa_xuan_mai",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Trần Phú",
        codename: "xa_tran_phu",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Hòa Phú",
        codename: "xa_hoa_phu",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Quảng Bị",
        codename: "xa_quang_bi",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Minh Châu",
        codename: "xa_minh_chau",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Quảng Oai",
        codename: "xa_quang_oai",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Vật Lại",
        codename: "xa_vat_lai",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Cổ Đô",
        codename: "xa_co_đo",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Bất Bạt",
        codename: "xa_bat_bat",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Suối Hai",
        codename: "xa_suoi_hai",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Ba Vì",
        codename: "xa_ba_vi",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Yên Bài",
        codename: "xa_yen_bai",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Đoài Phương",
        codename: "xa_đoai_phuong",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Phúc Thọ",
        codename: "xa_phuc_tho",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Phúc Lộc",
        codename: "xa_phuc_loc",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Hát Môn",
        codename: "xa_hat_mon",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Thạch Thất",
        codename: "xa_thach_that",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Hạ Bằng",
        codename: "xa_ha_bang",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Tây Phương",
        codename: "xa_tay_phuong",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Hòa Lạc",
        codename: "xa_hoa_lac",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Yên Xuân",
        codename: "xa_yen_xuan",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Quốc Oai",
        codename: "xa_quoc_oai",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Hưng Đạo",
        codename: "xa_hung_đao",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Kiều Phú",
        codename: "xa_kieu_phu",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Phú Cát",
        codename: "xa_phu_cat",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Hoài Đức",
        codename: "xa_hoai_đuc",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Dương Hòa",
        codename: "xa_duong_hoa",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Sơn Đồng",
        codename: "xa_son_đong",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Xã An Khánh",
        codename: "xa_an_khanh",
        division_type: "xã",
      },

      {
        id: 106,
        name: "Xã Đan Phượng",
        codename: "xa_đan_phuong",
        division_type: "xã",
      },

      {
        id: 107,
        name: "Xã Ô Diên",
        codename: "xa_o_dien",
        division_type: "xã",
      },

      {
        id: 108,
        name: "Xã Liên Minh",
        codename: "xa_lien_minh",
        division_type: "xã",
      },

      {
        id: 109,
        name: "Xã Gia Lâm",
        codename: "xa_gia_lam",
        division_type: "xã",
      },

      {
        id: 110,
        name: "Xã Thuận An",
        codename: "xa_thuan_an",
        division_type: "xã",
      },

      {
        id: 111,
        name: "Xã Bát Tràng",
        codename: "xa_bat_trang",
        division_type: "xã",
      },

      {
        id: 112,
        name: "Xã Phù Đổng",
        codename: "xa_phu_đong",
        division_type: "xã",
      },

      {
        id: 113,
        name: "Xã Thư Lâm",
        codename: "xa_thu_lam",
        division_type: "xã",
      },

      {
        id: 114,
        name: "Xã Đông Anh",
        codename: "xa_đong_anh",
        division_type: "xã",
      },

      {
        id: 115,
        name: "Xã Phúc Thịnh",
        codename: "xa_phuc_thinh",
        division_type: "xã",
      },

      {
        id: 116,
        name: "Xã Thiên Lộc",
        codename: "xa_thien_loc",
        division_type: "xã",
      },

      {
        id: 117,
        name: "Xã Vĩnh Thanh",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 118,
        name: "Xã Mê Linh",
        codename: "xa_me_linh",
        division_type: "xã",
      },

      {
        id: 119,
        name: "Xã Yên Lãng",
        codename: "xa_yen_lang",
        division_type: "xã",
      },

      {
        id: 120,
        name: "Xã Tiến Thắng",
        codename: "xa_tien_thang",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã Quang Minh",
        codename: "xa_quang_minh",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Sóc Sơn",
        codename: "xa_soc_son",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Đa Phúc",
        codename: "xa_đa_phuc",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Nội Bài",
        codename: "xa_noi_bai",
        division_type: "xã",
      },

      {
        id: 125,
        name: "Xã Trung Giã",
        codename: "xa_trung_gia",
        division_type: "xã",
      },

      {
        id: 126,
        name: "Xã Kim Anh",
        codename: "xa_kim_anh",
        division_type: "xã",
      },
    ],
  },
  {
    id: 2,
    code: "04",
    name: "Tỉnh Cao Bằng",
    codename: "tinh_cao_bang",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Quảng Lâm",
        codename: "xa_quang_lam",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Nam Quang",
        codename: "xa_nam_quang",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Lý Bôn",
        codename: "xa_ly_bon",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Bảo Lâm",
        codename: "xa_bao_lam",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Yên Thổ",
        codename: "xa_yen_tho",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Sơn Lộ",
        codename: "xa_son_lo",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Hưng Đạo",
        codename: "xa_hung_đao",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Bảo Lạc",
        codename: "xa_bao_lac",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Cốc Pàng",
        codename: "xa_coc_pang",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Cô Ba",
        codename: "xa_co_ba",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Khánh Xuân",
        codename: "xa_khanh_xuan",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Xuân Trường",
        codename: "xa_xuan_truong",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Huy Giáp",
        codename: "xa_huy_giap",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Ca Thành",
        codename: "xa_ca_thanh",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Phan Thanh",
        codename: "xa_phan_thanh",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Thành Công",
        codename: "xa_thanh_cong",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Tam Kim",
        codename: "xa_tam_kim",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Nguyên Bình",
        codename: "xa_nguyen_binh",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Tĩnh Túc",
        codename: "xa_tinh_tuc",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Minh Tâm",
        codename: "xa_minh_tam",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Thanh Long",
        codename: "xa_thanh_long",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Cần Yên",
        codename: "xa_can_yen",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Thông Nông",
        codename: "xa_thong_nong",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Trường Hà",
        codename: "xa_truong_ha",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Hà Quảng",
        codename: "xa_ha_quang",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Lũng Nặm",
        codename: "xa_lung_nam",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Tổng Cọt",
        codename: "xa_tong_cot",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Nam Tuấn",
        codename: "xa_nam_tuan",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Hòa An",
        codename: "xa_hoa_an",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Bạch Đằng",
        codename: "xa_bach_đang",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Nguyễn Huệ",
        codename: "xa_nguyen_hue",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Minh Khai",
        codename: "xa_minh_khai",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Canh Tân",
        codename: "xa_canh_tan",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Kim Đồng",
        codename: "xa_kim_đong",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Thạch An",
        codename: "xa_thach_an",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Đông Khê",
        codename: "xa_đong_khe",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Đức Long",
        codename: "xa_đuc_long",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Phục Hòa",
        codename: "xa_phuc_hoa",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Bế Văn Đàn",
        codename: "xa_be_van_đan",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Độc Lập",
        codename: "xa_đoc_lap",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Quảng Uyên",
        codename: "xa_quang_uyen",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Hạnh Phúc",
        codename: "xa_hanh_phuc",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Quang Hán",
        codename: "xa_quang_han",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Trà Lĩnh",
        codename: "xa_tra_linh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Quang Trung",
        codename: "xa_quang_trung",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Đoài Dương",
        codename: "xa_đoai_duong",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Trùng Khánh",
        codename: "xa_trung_khanh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Đàm Thủy",
        codename: "xa_đam_thuy",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Đình Phong",
        codename: "xa_đinh_phong",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Hạ Lang",
        codename: "xa_ha_lang",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Lý Quốc",
        codename: "xa_ly_quoc",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Vinh Quý",
        codename: "xa_vinh_quy",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Quang Long",
        codename: "xa_quang_long",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Phường Thục Phán",
        codename: "phuong_thuc_phan",
        division_type: "phường",
      },

      {
        id: 55,
        name: "Phường Nùng Trí Cao",
        codename: "phuong_nung_tri_cao",
        division_type: "phường",
      },

      {
        id: 56,
        name: "Phường Tân Giang",
        codename: "phuong_tan_giang",
        division_type: "phường",
      },
    ],
  },
  {
    id: 3,
    code: "08",
    name: "Tỉnh Tuyên Quang",
    codename: "tinh_tuyen_quang",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Thượng Lâm",
        codename: "xa_thuong_lam",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Lâm Bình",
        codename: "xa_lam_binh",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Minh Quang",
        codename: "xa_minh_quang",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Bình An",
        codename: "xa_binh_an",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Côn Lôn",
        codename: "xa_con_lon",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Yên Hoa",
        codename: "xa_yen_hoa",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Thượng Nông",
        codename: "xa_thuong_nong",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Hồng Thái",
        codename: "xa_hong_thai",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Nà Hang",
        codename: "xa_na_hang",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Tân Mỹ",
        codename: "xa_tan_my",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Yên Lập",
        codename: "xa_yen_lap",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Chiêm Hóa",
        codename: "xa_chiem_hoa",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Hòa An",
        codename: "xa_hoa_an",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Kiên Đài",
        codename: "xa_kien_đai",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Tri Phú",
        codename: "xa_tri_phu",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Kim Bình",
        codename: "xa_kim_binh",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Yên Nguyên",
        codename: "xa_yen_nguyen",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Yên Phú",
        codename: "xa_yen_phu",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Bạch Xa",
        codename: "xa_bach_xa",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Phù Lưu",
        codename: "xa_phu_luu",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Hàm Yên",
        codename: "xa_ham_yen",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Bình Xa",
        codename: "xa_binh_xa",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Thái Sơn",
        codename: "xa_thai_son",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Thái Hòa",
        codename: "xa_thai_hoa",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Hùng Lợi",
        codename: "xa_hung_loi",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Trung Sơn",
        codename: "xa_trung_son",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Thái Bình",
        codename: "xa_thai_binh",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Tân Long",
        codename: "xa_tan_long",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Xuân Vân",
        codename: "xa_xuan_van",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Lực Hành",
        codename: "xa_luc_hanh",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Yên Sơn",
        codename: "xa_yen_son",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Nhữ Khê",
        codename: "xa_nhu_khe",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Tân Trào",
        codename: "xa_tan_trao",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Minh Thanh",
        codename: "xa_minh_thanh",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Sơn Dương",
        codename: "xa_son_duong",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Bình Ca",
        codename: "xa_binh_ca",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Tân Thanh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Sơn Thủy",
        codename: "xa_son_thuy",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Phú Lương",
        codename: "xa_phu_luong",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Trường Sinh",
        codename: "xa_truong_sinh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Hồng Sơn",
        codename: "xa_hong_son",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Đông Thọ",
        codename: "xa_đong_tho",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Lũng Cú",
        codename: "xa_lung_cu",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Đồng Văn",
        codename: "xa_đong_van",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Sà Phìn",
        codename: "xa_sa_phin",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Phố Bảng",
        codename: "xa_pho_bang",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Lũng Phìn",
        codename: "xa_lung_phin",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Sủng Máng",
        codename: "xa_sung_mang",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Sơn Vĩ",
        codename: "xa_son_vi",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Mèo Vạc",
        codename: "xa_meo_vac",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Khâu Vai",
        codename: "xa_khau_vai",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Niêm Sơn",
        codename: "xa_niem_son",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Tát Ngà",
        codename: "xa_tat_nga",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Thắng Mố",
        codename: "xa_thang_mo",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Bạch Đích",
        codename: "xa_bach_đich",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Yên Minh",
        codename: "xa_yen_minh",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Mậu Duệ",
        codename: "xa_mau_due",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Du Già",
        codename: "xa_du_gia",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Đường Thượng",
        codename: "xa_đuong_thuong",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Lùng Tám",
        codename: "xa_lung_tam",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Cán Tỷ",
        codename: "xa_can_ty",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Nghĩa Thuận",
        codename: "xa_nghia_thuan",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Quản Bạ",
        codename: "xa_quan_ba",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Tùng Vài",
        codename: "xa_tung_vai",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Yên Cường",
        codename: "xa_yen_cuong",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Đường Hồng",
        codename: "xa_đuong_hong",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Bắc Mê",
        codename: "xa_bac_me",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Minh Ngọc",
        codename: "xa_minh_ngoc",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Ngọc Đường",
        codename: "xa_ngoc_đuong",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Lao Chải",
        codename: "xa_lao_chai",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Thanh Thủy",
        codename: "xa_thanh_thuy",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Phú Linh",
        codename: "xa_phu_linh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Linh Hồ",
        codename: "xa_linh_ho",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Bạch Ngọc",
        codename: "xa_bach_ngoc",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Vị Xuyên",
        codename: "xa_vi_xuyen",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Việt Lâm",
        codename: "xa_viet_lam",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Tân Quang",
        codename: "xa_tan_quang",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Đồng Tâm",
        codename: "xa_đong_tam",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Liên Hiệp",
        codename: "xa_lien_hiep",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Bằng Hành",
        codename: "xa_bang_hanh",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Bắc Quang",
        codename: "xa_bac_quang",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Hùng An",
        codename: "xa_hung_an",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Vĩnh Tuy",
        codename: "xa_vinh_tuy",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Đồng Yên",
        codename: "xa_đong_yen",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Tiên Yên",
        codename: "xa_tien_yen",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Xuân Giang",
        codename: "xa_xuan_giang",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Bằng Lang",
        codename: "xa_bang_lang",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Yên Thành",
        codename: "xa_yen_thanh",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Quang Bình",
        codename: "xa_quang_binh",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Tân Trịnh",
        codename: "xa_tan_trinh",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Thông Nguyên",
        codename: "xa_thong_nguyen",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Hồ Thầu",
        codename: "xa_ho_thau",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Nậm Dịch",
        codename: "xa_nam_dich",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Hoàng Su Phì",
        codename: "xa_hoang_su_phi",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Thàng Tín",
        codename: "xa_thang_tin",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Bản Máy",
        codename: "xa_ban_may",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Pờ Ly Ngài",
        codename: "xa_po_ly_ngai",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Xín Mần",
        codename: "xa_xin_man",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Pà Vầy Sủ",
        codename: "xa_pa_vay_su",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Nấm Dẩn",
        codename: "xa_nam_dan",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Trung Thịnh",
        codename: "xa_trung_thinh",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Khuôn Lùng",
        codename: "xa_khuon_lung",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Phường Mỹ Lâm",
        codename: "phuong_my_lam",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường Minh Xuân",
        codename: "phuong_minh_xuan",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường Nông Tiến",
        codename: "phuong_nong_tien",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường An Tường",
        codename: "phuong_an_tuong",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường Bình Thuận",
        codename: "phuong_binh_thuan",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường Hà Giang 1",
        codename: "phuong_ha_giang_1",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường Hà Giang 2",
        codename: "phuong_ha_giang_2",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Xã Trung Hà",
        codename: "xa_trung_ha",
        division_type: "xã",
      },

      {
        id: 113,
        name: "Xã Kiến Thiết",
        codename: "xa_kien_thiet",
        division_type: "xã",
      },

      {
        id: 114,
        name: "Xã Hùng Đức",
        codename: "xa_hung_đuc",
        division_type: "xã",
      },

      {
        id: 115,
        name: "Xã Minh Sơn",
        codename: "xa_minh_son",
        division_type: "xã",
      },

      {
        id: 116,
        name: "Xã Minh Tân",
        codename: "xa_minh_tan",
        division_type: "xã",
      },

      {
        id: 117,
        name: "Xã Thuận Hòa",
        codename: "xa_thuan_hoa",
        division_type: "xã",
      },

      {
        id: 118,
        name: "Xã Tùng Bá",
        codename: "xa_tung_ba",
        division_type: "xã",
      },

      {
        id: 119,
        name: "Xã Thượng Sơn",
        codename: "xa_thuong_son",
        division_type: "xã",
      },

      {
        id: 120,
        name: "Xã Cao Bồ",
        codename: "xa_cao_bo",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã Ngọc Long",
        codename: "xa_ngoc_long",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Giáp Trung",
        codename: "xa_giap_trung",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Tiên Nguyên",
        codename: "xa_tien_nguyen",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Quảng Nguyên",
        codename: "xa_quang_nguyen",
        division_type: "xã",
      },
    ],
  },
  {
    id: 4,
    code: "11",
    name: "Tỉnh Điện Biên",
    codename: "tinh_đien_bien",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Mường Nhé",
        codename: "xa_muong_nhe",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Sín Thầu",
        codename: "xa_sin_thau",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Mường Toong",
        codename: "xa_muong_toong",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Nậm Kè",
        codename: "xa_nam_ke",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Quảng Lâm",
        codename: "xa_quang_lam",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Nà Hỳ",
        codename: "xa_na_hy",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Mường Chà",
        codename: "xa_muong_cha",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Nà Bủng",
        codename: "xa_na_bung",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Chà Tở",
        codename: "xa_cha_to",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Si Pa Phìn",
        codename: "xa_si_pa_phin",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Na Sang",
        codename: "xa_na_sang",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Mường Tùng",
        codename: "xa_muong_tung",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Pa Ham",
        codename: "xa_pa_ham",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nậm Nèn",
        codename: "xa_nam_nen",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Mường Pồn",
        codename: "xa_muong_pon",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Tủa Chùa",
        codename: "xa_tua_chua",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Sín Chải",
        codename: "xa_sin_chai",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Sính Phình",
        codename: "xa_sinh_phinh",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Tủa Thàng",
        codename: "xa_tua_thang",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Sáng Nhè",
        codename: "xa_sang_nhe",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Tuần Giáo",
        codename: "xa_tuan_giao",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Quài Tở",
        codename: "xa_quai_to",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Mường Mùn",
        codename: "xa_muong_mun",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Pú Nhung",
        codename: "xa_pu_nhung",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Chiềng Sinh",
        codename: "xa_chieng_sinh",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Mường Ảng",
        codename: "xa_muong_ang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Nà Tấu",
        codename: "xa_na_tau",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Búng Lao",
        codename: "xa_bung_lao",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Mường Lạn",
        codename: "xa_muong_lan",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Mường Phăng",
        codename: "xa_muong_phang",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Thanh Nưa",
        codename: "xa_thanh_nua",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Thanh An",
        codename: "xa_thanh_an",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Thanh Yên",
        codename: "xa_thanh_yen",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Sam Mứn",
        codename: "xa_sam_mun",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Núa Ngam",
        codename: "xa_nua_ngam",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Mường Nhà",
        codename: "xa_muong_nha",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Na Son",
        codename: "xa_na_son",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Xa Dung",
        codename: "xa_xa_dung",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Pu Nhi",
        codename: "xa_pu_nhi",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Mường Luân",
        codename: "xa_muong_luan",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Tìa Dình",
        codename: "xa_tia_dinh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Phình Giàng",
        codename: "xa_phinh_giang",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Phường Mường Lay",
        codename: "phuong_muong_lay",
        division_type: "phường",
      },

      {
        id: 44,
        name: "Phường Điện Biên Phủ",
        codename: "phuong_đien_bien_phu",
        division_type: "phường",
      },

      {
        id: 45,
        name: "Phường Mường Thanh",
        codename: "phuong_muong_thanh",
        division_type: "phường",
      },
    ],
  },
  {
    id: 5,
    code: "12",
    name: "Tỉnh Lai Châu",
    codename: "tinh_lai_chau",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Mường Kim",
        codename: "xa_muong_kim",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Khoen On",
        codename: "xa_khoen_on",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Than Uyên",
        codename: "xa_than_uyen",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Mường Than",
        codename: "xa_muong_than",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Pắc Ta",
        codename: "xa_pac_ta",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Nậm Sỏ",
        codename: "xa_nam_so",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Tân Uyên",
        codename: "xa_tan_uyen",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Mường Khoa",
        codename: "xa_muong_khoa",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Bản Bo",
        codename: "xa_ban_bo",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Bình Lư",
        codename: "xa_binh_lu",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Tả Lèng",
        codename: "xa_ta_leng",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Khun Há",
        codename: "xa_khun_ha",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Sin Suối Hồ",
        codename: "xa_sin_suoi_ho",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Phong Thổ",
        codename: "xa_phong_tho",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Dào San",
        codename: "xa_dao_san",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Sì Lở Lầu",
        codename: "xa_si_lo_lau",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Khổng Lào",
        codename: "xa_khong_lao",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Tủa Sín Chải",
        codename: "xa_tua_sin_chai",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Sìn Hồ",
        codename: "xa_sin_ho",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Hồng Thu",
        codename: "xa_hong_thu",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Nậm Tăm",
        codename: "xa_nam_tam",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Pu Sam Cáp",
        codename: "xa_pu_sam_cap",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Nậm Cuổi",
        codename: "xa_nam_cuoi",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Nậm Mạ",
        codename: "xa_nam_ma",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Lê Lợi",
        codename: "xa_le_loi",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Nậm Hàng",
        codename: "xa_nam_hang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Mường Mô",
        codename: "xa_muong_mo",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Hua Bum",
        codename: "xa_hua_bum",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Pa Tần",
        codename: "xa_pa_tan",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Bum Nưa",
        codename: "xa_bum_nua",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Bum Tở",
        codename: "xa_bum_to",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Mường Tè",
        codename: "xa_muong_te",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Thu Lũm",
        codename: "xa_thu_lum",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Pa Ủ",
        codename: "xa_pa_u",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Phường Tân Phong",
        codename: "phuong_tan_phong",
        division_type: "phường",
      },

      {
        id: 36,
        name: "Phường Đoàn Kết",
        codename: "phuong_đoan_ket",
        division_type: "phường",
      },

      {
        id: 37,
        name: "Xã Mù Cả",
        codename: "xa_mu_ca",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Tà Tổng",
        codename: "xa_ta_tong",
        division_type: "xã",
      },
    ],
  },
  {
    id: 6,
    code: "14",
    name: "Tỉnh Sơn La",
    codename: "tinh_son_la",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Đoàn Kết",
        codename: "xa_đoan_ket",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Lóng Sập",
        codename: "xa_long_sap",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Chiềng Sơn",
        codename: "xa_chieng_son",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Vân Hồ",
        codename: "xa_van_ho",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Song Khủa",
        codename: "xa_song_khua",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Tô Múa",
        codename: "xa_to_mua",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Xuân Nha",
        codename: "xa_xuan_nha",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Quỳnh Nhai",
        codename: "xa_quynh_nhai",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Mường Chiên",
        codename: "xa_muong_chien",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Mường Giôn",
        codename: "xa_muong_gion",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Mường Sại",
        codename: "xa_muong_sai",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Thuận Châu",
        codename: "xa_thuan_chau",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Chiềng La",
        codename: "xa_chieng_la",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nậm Lầu",
        codename: "xa_nam_lau",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Muổi Nọi",
        codename: "xa_muoi_noi",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Mường Khiêng",
        codename: "xa_muong_khieng",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Co Mạ",
        codename: "xa_co_ma",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Bình Thuận",
        codename: "xa_binh_thuan",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Mường É",
        codename: "xa_muong_e",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Long Hẹ",
        codename: "xa_long_he",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Mường La",
        codename: "xa_muong_la",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Chiềng Lao",
        codename: "xa_chieng_lao",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Mường Bú",
        codename: "xa_muong_bu",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Chiềng Hoa",
        codename: "xa_chieng_hoa",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Bắc Yên",
        codename: "xa_bac_yen",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Tà Xùa",
        codename: "xa_ta_xua",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Tạ Khoa",
        codename: "xa_ta_khoa",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Xím Vàng",
        codename: "xa_xim_vang",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Pắc Ngà",
        codename: "xa_pac_nga",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Chiềng Sại",
        codename: "xa_chieng_sai",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Phù Yên",
        codename: "xa_phu_yen",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Gia Phù",
        codename: "xa_gia_phu",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Tường Hạ",
        codename: "xa_tuong_ha",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Mường Cơi",
        codename: "xa_muong_coi",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Mường Bang",
        codename: "xa_muong_bang",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Tân Phong",
        codename: "xa_tan_phong",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Kim Bon",
        codename: "xa_kim_bon",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Yên Châu",
        codename: "xa_yen_chau",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Chiềng Hặc",
        codename: "xa_chieng_hac",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Lóng Phiêng",
        codename: "xa_long_phieng",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Yên Sơn",
        codename: "xa_yen_son",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Chiềng Mai",
        codename: "xa_chieng_mai",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Mai Sơn",
        codename: "xa_mai_son",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Phiêng Pằn",
        codename: "xa_phieng_pan",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Chiềng Mung",
        codename: "xa_chieng_mung",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Phiêng Cằm",
        codename: "xa_phieng_cam",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Mường Chanh",
        codename: "xa_muong_chanh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Tà Hộc",
        codename: "xa_ta_hoc",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Chiềng Sung",
        codename: "xa_chieng_sung",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Bó Sinh",
        codename: "xa_bo_sinh",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Chiềng Khương",
        codename: "xa_chieng_khuong",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Mường Hung",
        codename: "xa_muong_hung",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Chiềng Khoong",
        codename: "xa_chieng_khoong",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Mường Lầm",
        codename: "xa_muong_lam",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Nậm Ty",
        codename: "xa_nam_ty",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Sông Mã",
        codename: "xa_song_ma",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Huổi Một",
        codename: "xa_huoi_mot",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Chiềng Sơ",
        codename: "xa_chieng_so",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Sốp Cộp",
        codename: "xa_sop_cop",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Púng Bánh",
        codename: "xa_pung_banh",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Mường Lạn",
        codename: "xa_muong_lan",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Phiêng Khoài",
        codename: "xa_phieng_khoai",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Suối Tọ",
        codename: "xa_suoi_to",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Ngọc Chiến",
        codename: "xa_ngoc_chien",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Tân Yên",
        codename: "xa_tan_yen",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Mường Bám",
        codename: "xa_muong_bam",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Mường Lèo",
        codename: "xa_muong_leo",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Phường Tô Hiệu",
        codename: "phuong_to_hieu",
        division_type: "phường",
      },

      {
        id: 69,
        name: "Phường Chiềng An",
        codename: "phuong_chieng_an",
        division_type: "phường",
      },

      {
        id: 70,
        name: "Phường Chiềng Cơi",
        codename: "phuong_chieng_coi",
        division_type: "phường",
      },

      {
        id: 71,
        name: "Phường Chiềng Sinh",
        codename: "phuong_chieng_sinh",
        division_type: "phường",
      },

      {
        id: 72,
        name: "Phường Mộc Châu",
        codename: "phuong_moc_chau",
        division_type: "phường",
      },

      {
        id: 73,
        name: "Phường Mộc Sơn",
        codename: "phuong_moc_son",
        division_type: "phường",
      },

      {
        id: 74,
        name: "Phường Vân Sơn",
        codename: "phuong_van_son",
        division_type: "phường",
      },

      {
        id: 75,
        name: "Phường Thảo Nguyên",
        codename: "phuong_thao_nguyen",
        division_type: "phường",
      },
    ],
  },
  {
    id: 7,
    code: "15",
    name: "Tỉnh Lào Cai",
    codename: "tinh_lao_cai",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Khao Mang",
        codename: "xa_khao_mang",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Mù Cang Chải",
        codename: "xa_mu_cang_chai",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Púng Luông",
        codename: "xa_pung_luong",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Tú Lệ",
        codename: "xa_tu_le",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Trạm Tấu",
        codename: "xa_tram_tau",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Hạnh Phúc",
        codename: "xa_hanh_phuc",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Phình Hồ",
        codename: "xa_phinh_ho",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Liên Sơn",
        codename: "xa_lien_son",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Gia Hội",
        codename: "xa_gia_hoi",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Sơn Lương",
        codename: "xa_son_luong",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Văn Chấn",
        codename: "xa_van_chan",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Thượng Bằng La",
        codename: "xa_thuong_bang_la",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Chấn Thịnh",
        codename: "xa_chan_thinh",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nghĩa Tâm",
        codename: "xa_nghia_tam",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Phong Dụ Hạ",
        codename: "xa_phong_du_ha",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Châu Quế",
        codename: "xa_chau_que",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Lâm Giang",
        codename: "xa_lam_giang",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Đông Cuông",
        codename: "xa_đong_cuong",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Tân Hợp",
        codename: "xa_tan_hop",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Mậu A",
        codename: "xa_mau_a",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Xuân Ái",
        codename: "xa_xuan_ai",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Mỏ Vàng",
        codename: "xa_mo_vang",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Lâm Thượng",
        codename: "xa_lam_thuong",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Lục Yên",
        codename: "xa_luc_yen",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Tân Lĩnh",
        codename: "xa_tan_linh",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Khánh Hòa",
        codename: "xa_khanh_hoa",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Phúc Lợi",
        codename: "xa_phuc_loi",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Mường Lai",
        codename: "xa_muong_lai",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Cảm Nhân",
        codename: "xa_cam_nhan",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Yên Thành",
        codename: "xa_yen_thanh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Thác Bà",
        codename: "xa_thac_ba",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Yên Bình",
        codename: "xa_yen_binh",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Bảo Ái",
        codename: "xa_bao_ai",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Trấn Yên",
        codename: "xa_tran_yen",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Hưng Khánh",
        codename: "xa_hung_khanh",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Lương Thịnh",
        codename: "xa_luong_thinh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Việt Hồng",
        codename: "xa_viet_hong",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Quy Mông",
        codename: "xa_quy_mong",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Cốc San",
        codename: "xa_coc_san",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Hợp Thành",
        codename: "xa_hop_thanh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Phong Hải",
        codename: "xa_phong_hai",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Xuân Quang",
        codename: "xa_xuan_quang",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Bảo Thắng",
        codename: "xa_bao_thang",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Tằng Loỏng",
        codename: "xa_tang_loong",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Gia Phú",
        codename: "xa_gia_phu",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Mường Hum",
        codename: "xa_muong_hum",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Dền Sáng",
        codename: "xa_den_sang",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Y Tý",
        codename: "xa_y_ty",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã A Mú Sung",
        codename: "xa_a_mu_sung",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Trịnh Tường",
        codename: "xa_trinh_tuong",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Bản Xèo",
        codename: "xa_ban_xeo",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Bát Xát",
        codename: "xa_bat_xat",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Võ Lao",
        codename: "xa_vo_lao",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Khánh Yên",
        codename: "xa_khanh_yen",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Văn Bàn",
        codename: "xa_van_ban",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Dương Quỳ",
        codename: "xa_duong_quy",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Chiềng Ken",
        codename: "xa_chieng_ken",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Minh Lương",
        codename: "xa_minh_luong",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Nậm Chày",
        codename: "xa_nam_chay",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Bảo Yên",
        codename: "xa_bao_yen",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Nghĩa Đô",
        codename: "xa_nghia_đo",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Thượng Hà",
        codename: "xa_thuong_ha",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Xuân Hòa",
        codename: "xa_xuan_hoa",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Phúc Khánh",
        codename: "xa_phuc_khanh",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Bảo Hà",
        codename: "xa_bao_ha",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Mường Bo",
        codename: "xa_muong_bo",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Bản Hồ",
        codename: "xa_ban_ho",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Tả Van",
        codename: "xa_ta_van",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Tả Phìn",
        codename: "xa_ta_phin",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Cốc Lầu",
        codename: "xa_coc_lau",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Bảo Nhai",
        codename: "xa_bao_nhai",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Bản Liền",
        codename: "xa_ban_lien",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Bắc Hà",
        codename: "xa_bac_ha",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Tả Củ Tỷ",
        codename: "xa_ta_cu_ty",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Lùng Phình",
        codename: "xa_lung_phinh",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Pha Long",
        codename: "xa_pha_long",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Mường Khương",
        codename: "xa_muong_khuong",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Bản Lầu",
        codename: "xa_ban_lau",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Cao Sơn",
        codename: "xa_cao_son",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Si Ma Cai",
        codename: "xa_si_ma_cai",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Sín Chéng",
        codename: "xa_sin_cheng",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Phường Nghĩa Lộ",
        codename: "phuong_nghia_lo",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Trung Tâm",
        codename: "phuong_trung_tam",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Cầu Thia",
        codename: "phuong_cau_thia",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Văn Phú",
        codename: "phuong_van_phu",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Yên Bái",
        codename: "phuong_yen_bai",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Nam Cường",
        codename: "phuong_nam_cuong",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Âu Lâu",
        codename: "phuong_au_lau",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Cam Đường",
        codename: "phuong_cam_đuong",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Lào Cai",
        codename: "phuong_lao_cai",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Sa Pa",
        codename: "phuong_sa_pa",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Xã Nậm Xé",
        codename: "xa_nam_xe",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Ngũ Chỉ Sơn",
        codename: "xa_ngu_chi_son",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Chế Tạo",
        codename: "xa_che_tao",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Lao Chải",
        codename: "xa_lao_chai",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Nậm Có",
        codename: "xa_nam_co",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Tà Xi Láng",
        codename: "xa_ta_xi_lang",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Cát Thịnh",
        codename: "xa_cat_thinh",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Phong Dụ Thượng",
        codename: "xa_phong_du_thuong",
        division_type: "xã",
      },
    ],
  },
  {
    id: 8,
    code: "19",
    name: "Tỉnh Thái Nguyên",
    codename: "tinh_thai_nguyen",
    division_type: "tỉnh",
    wards: [
      {
        id: 0,
        name: "Xã Phường mới",
        codename: "xa_phuong_moi",
        division_type: "xã",
      },

      {
        id: 1,
        name: "Xã Tân Cương",
        codename: "xa_tan_cuong",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Đại Phúc",
        codename: "xa_đai_phuc",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Thành Công",
        codename: "xa_thanh_cong",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Định Hóa",
        codename: "xa_đinh_hoa",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Bình Yên",
        codename: "xa_binh_yen",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Trung Hội",
        codename: "xa_trung_hoi",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Phượng Tiến",
        codename: "xa_phuong_tien",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Phú Đình",
        codename: "xa_phu_đinh",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Bình Thành",
        codename: "xa_binh_thanh",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Kim Phượng",
        codename: "xa_kim_phuong",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Lam Vỹ",
        codename: "xa_lam_vy",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Võ Nhai",
        codename: "xa_vo_nhai",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Dân Tiến",
        codename: "xa_dan_tien",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nghinh Tường",
        codename: "xa_nghinh_tuong",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Thần Sa",
        codename: "xa_than_sa",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã La Hiên",
        codename: "xa_la_hien",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Tràng Xá",
        codename: "xa_trang_xa",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Phú Lương",
        codename: "xa_phu_luong",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Vô Tranh",
        codename: "xa_vo_tranh",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Yên Trạch",
        codename: "xa_yen_trach",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Hợp Thành",
        codename: "xa_hop_thanh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Đồng Hỷ",
        codename: "xa_đong_hy",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Quang Sơn",
        codename: "xa_quang_son",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Trại Cau",
        codename: "xa_trai_cau",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Nam Hòa",
        codename: "xa_nam_hoa",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Văn Hán",
        codename: "xa_van_han",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Văn Lăng",
        codename: "xa_van_lang",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Đại Từ",
        codename: "xa_đai_tu",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Đức Lương",
        codename: "xa_đuc_luong",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Phú Thịnh",
        codename: "xa_phu_thinh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã La Bằng",
        codename: "xa_la_bang",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Phú Lạc",
        codename: "xa_phu_lac",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã An Khánh",
        codename: "xa_an_khanh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Quân Chu",
        codename: "xa_quan_chu",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Vạn Phú",
        codename: "xa_van_phu",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Phú Xuyên",
        codename: "xa_phu_xuyen",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Phú Bình",
        codename: "xa_phu_binh",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Điềm Thụy",
        codename: "xa_điem_thuy",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Kha Sơn",
        codename: "xa_kha_son",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Tân Khánh",
        codename: "xa_tan_khanh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Bằng Thành",
        codename: "xa_bang_thanh",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Nghiên Loan",
        codename: "xa_nghien_loan",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Cao Minh",
        codename: "xa_cao_minh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Ba Bể",
        codename: "xa_ba_be",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Chợ Rã",
        codename: "xa_cho_ra",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Phúc Lộc",
        codename: "xa_phuc_loc",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Thượng Minh",
        codename: "xa_thuong_minh",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Đồng Phúc",
        codename: "xa_đong_phuc",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Bằng Vân",
        codename: "xa_bang_van",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Ngân Sơn",
        codename: "xa_ngan_son",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Nà Phặc",
        codename: "xa_na_phac",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Hiệp Lực",
        codename: "xa_hiep_luc",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Nam Cường",
        codename: "xa_nam_cuong",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Quảng Bạch",
        codename: "xa_quang_bach",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Yên Thịnh",
        codename: "xa_yen_thinh",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Chợ Đồn",
        codename: "xa_cho_đon",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Yên Phong",
        codename: "xa_yen_phong",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Nghĩa Tá",
        codename: "xa_nghia_ta",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Phủ Thông",
        codename: "xa_phu_thong",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Cẩm Giàng",
        codename: "xa_cam_giang",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Vĩnh Thông",
        codename: "xa_vinh_thong",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Bạch Thông",
        codename: "xa_bach_thong",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Phong Quang",
        codename: "xa_phong_quang",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Văn Lang",
        codename: "xa_van_lang",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Cường Lợi",
        codename: "xa_cuong_loi",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Na Rì",
        codename: "xa_na_ri",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Trần Phú",
        codename: "xa_tran_phu",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Côn Minh",
        codename: "xa_con_minh",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Xuân Dương",
        codename: "xa_xuan_duong",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Tân Kỳ",
        codename: "xa_tan_ky",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Thanh Mai",
        codename: "xa_thanh_mai",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Thanh Thịnh",
        codename: "xa_thanh_thinh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Chợ Mới",
        codename: "xa_cho_moi",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Yên Bình",
        codename: "xa_yen_binh",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Phường Phan Đình Phùng",
        codename: "phuong_phan_đinh_phung",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Phường Linh Sơn",
        codename: "phuong_linh_son",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Phường Tích Lương",
        codename: "phuong_tich_luong",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Phường Gia Sàng",
        codename: "phuong_gia_sang",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Phường Quyết Thắng",
        codename: "phuong_quyet_thang",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Phường Quan Triều",
        codename: "phuong_quan_trieu",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Phường Sông Công",
        codename: "phuong_song_cong",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Phường Bá Xuyên",
        codename: "phuong_ba_xuyen",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Phường Bách Quang",
        codename: "phuong_bach_quang",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Phường Phổ Yên",
        codename: "phuong_pho_yen",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Phường Vạn Xuân",
        codename: "phuong_van_xuan",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Phường Trung Thành",
        codename: "phuong_trung_thanh",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Phường Phúc Thuận",
        codename: "phuong_phuc_thuan",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Phường Đức Xuân",
        codename: "phuong_đuc_xuan",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Phường Bắc Kạn",
        codename: "phuong_bac_kan",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Sảng Mộc",
        codename: "xa_sang_moc",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Thượng Quan",
        codename: "xa_thuong_quan",
        division_type: "xã",
      },
    ],
  },
  {
    id: 9,
    code: "20",
    name: "Tỉnh Lạng Sơn",
    codename: "tinh_lang_son",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Thất Khê",
        codename: "xa_that_khe",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Đoàn Kết",
        codename: "xa_đoan_ket",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Tràng Định",
        codename: "xa_trang_đinh",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Quốc Khánh",
        codename: "xa_quoc_khanh",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Kháng Chiến",
        codename: "xa_khang_chien",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Quốc Việt",
        codename: "xa_quoc_viet",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Bình Gia",
        codename: "xa_binh_gia",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Tân Văn",
        codename: "xa_tan_van",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Hồng Phong",
        codename: "xa_hong_phong",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Hoa Thám",
        codename: "xa_hoa_tham",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Quý Hòa",
        codename: "xa_quy_hoa",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Thiện Hòa",
        codename: "xa_thien_hoa",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Thiện Thuật",
        codename: "xa_thien_thuat",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Thiện Long",
        codename: "xa_thien_long",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Bắc Sơn",
        codename: "xa_bac_son",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Hưng Vũ",
        codename: "xa_hung_vu",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Vũ Lăng",
        codename: "xa_vu_lang",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Nhất Hòa",
        codename: "xa_nhat_hoa",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Vũ Lễ",
        codename: "xa_vu_le",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Tân Tri",
        codename: "xa_tan_tri",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Văn Quan",
        codename: "xa_van_quan",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Điềm He",
        codename: "xa_điem_he",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Yên Phúc",
        codename: "xa_yen_phuc",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Tri Lễ",
        codename: "xa_tri_le",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Tân Đoàn",
        codename: "xa_tan_đoan",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Khánh Khê",
        codename: "xa_khanh_khe",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Na Sầm",
        codename: "xa_na_sam",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Hoàng Văn Thụ",
        codename: "xa_hoang_van_thu",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Thụy Hùng",
        codename: "xa_thuy_hung",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Văn Lãng",
        codename: "xa_van_lang",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Hội Hoan",
        codename: "xa_hoi_hoan",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Lộc Bình",
        codename: "xa_loc_binh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Mẫu Sơn",
        codename: "xa_mau_son",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Na Dương",
        codename: "xa_na_duong",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Lợi Bác",
        codename: "xa_loi_bac",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Thống Nhất",
        codename: "xa_thong_nhat",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Xuân Dương",
        codename: "xa_xuan_duong",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Khuất Xá",
        codename: "xa_khuat_xa",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Đình Lập",
        codename: "xa_đinh_lap",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Thái Bình",
        codename: "xa_thai_binh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Châu Sơn",
        codename: "xa_chau_son",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Kiên Mộc",
        codename: "xa_kien_moc",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Hữu Lũng",
        codename: "xa_huu_lung",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Tuấn Sơn",
        codename: "xa_tuan_son",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Vân Nham",
        codename: "xa_van_nham",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Thiện Tân",
        codename: "xa_thien_tan",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Yên Bình",
        codename: "xa_yen_binh",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Hữu Liên",
        codename: "xa_huu_lien",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Cai Kinh",
        codename: "xa_cai_kinh",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Chi Lăng",
        codename: "xa_chi_lang",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Quan Sơn",
        codename: "xa_quan_son",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Chiến Thắng",
        codename: "xa_chien_thang",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Nhân Lý",
        codename: "xa_nhan_ly",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Bằng Mạc",
        codename: "xa_bang_mac",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Vạn Linh",
        codename: "xa_van_linh",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Đồng Đăng",
        codename: "xa_đong_đang",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Cao Lộc",
        codename: "xa_cao_loc",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Công Sơn",
        codename: "xa_cong_son",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Ba Sơn",
        codename: "xa_ba_son",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Phường Tam Thanh",
        codename: "phuong_tam_thanh",
        division_type: "phường",
      },

      {
        id: 63,
        name: "Phường Lương Văn Tri",
        codename: "phuong_luong_van_tri",
        division_type: "phường",
      },

      {
        id: 64,
        name: "Phường Kỳ Lừa",
        codename: "phuong_ky_lua",
        division_type: "phường",
      },

      {
        id: 65,
        name: "Phường Đông Kinh",
        codename: "phuong_đong_kinh",
        division_type: "phường",
      },
    ],
  },
  {
    id: 10,
    code: "22",
    name: "Tỉnh Quảng Ninh",
    codename: "tinh_quang_ninh",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Quảng La",
        codename: "xa_quang_la",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Thống Nhất",
        codename: "xa_thong_nhat",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Hải Hòa",
        codename: "xa_hai_hoa",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Tiên Yên",
        codename: "xa_tien_yen",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Điền Xá",
        codename: "xa_đien_xa",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Đông Ngũ",
        codename: "xa_đong_ngu",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Hải Lạng",
        codename: "xa_hai_lang",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Lương Minh",
        codename: "xa_luong_minh",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Kỳ Thượng",
        codename: "xa_ky_thuong",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Ba Chẽ",
        codename: "xa_ba_che",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Quảng Tân",
        codename: "xa_quang_tan",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Đầm Hà",
        codename: "xa_đam_ha",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Quảng Hà",
        codename: "xa_quang_ha",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Đường Hoa",
        codename: "xa_đuong_hoa",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Quảng Đức",
        codename: "xa_quang_đuc",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Hoành Mô",
        codename: "xa_hoanh_mo",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Lục Hồn",
        codename: "xa_luc_hon",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Bình Liêu",
        codename: "xa_binh_lieu",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Hải Sơn",
        codename: "xa_hai_son",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Hải Ninh",
        codename: "xa_hai_ninh",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Vĩnh Thực",
        codename: "xa_vinh_thuc",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Cái Chiên",
        codename: "xa_cai_chien",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Phường An Sinh",
        codename: "phuong_an_sinh",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Phường Đông Triều",
        codename: "phuong_đong_trieu",
        division_type: "phường",
      },

      {
        id: 25,
        name: "Phường Bình Khê",
        codename: "phuong_binh_khe",
        division_type: "phường",
      },

      {
        id: 26,
        name: "Phường Mạo Khê",
        codename: "phuong_mao_khe",
        division_type: "phường",
      },

      {
        id: 27,
        name: "Phường Hoàng Quế",
        codename: "phuong_hoang_que",
        division_type: "phường",
      },

      {
        id: 28,
        name: "Phường Yên Tử",
        codename: "phuong_yen_tu",
        division_type: "phường",
      },

      {
        id: 29,
        name: "Phường Vàng Danh",
        codename: "phuong_vang_danh",
        division_type: "phường",
      },

      {
        id: 30,
        name: "Phường Uông Bí",
        codename: "phuong_uong_bi",
        division_type: "phường",
      },

      {
        id: 31,
        name: "Phường Đông Mai",
        codename: "phuong_đong_mai",
        division_type: "phường",
      },

      {
        id: 32,
        name: "Phường Hiệp Hòa",
        codename: "phuong_hiep_hoa",
        division_type: "phường",
      },

      {
        id: 33,
        name: "Phường Quảng Yên",
        codename: "phuong_quang_yen",
        division_type: "phường",
      },

      {
        id: 34,
        name: "Phường Hà An",
        codename: "phuong_ha_an",
        division_type: "phường",
      },

      {
        id: 35,
        name: "Phường Phong Cốc",
        codename: "phuong_phong_coc",
        division_type: "phường",
      },

      {
        id: 36,
        name: "Phường Liên Hòa",
        codename: "phuong_lien_hoa",
        division_type: "phường",
      },

      {
        id: 37,
        name: "Phường Tuần Châu",
        codename: "phuong_tuan_chau",
        division_type: "phường",
      },

      {
        id: 38,
        name: "Phường Việt Hưng",
        codename: "phuong_viet_hung",
        division_type: "phường",
      },

      {
        id: 39,
        name: "Phường Bãi Cháy",
        codename: "phuong_bai_chay",
        division_type: "phường",
      },

      {
        id: 40,
        name: "Phường Hà Tu",
        codename: "phuong_ha_tu",
        division_type: "phường",
      },

      {
        id: 41,
        name: "Phường Hà Lầm",
        codename: "phuong_ha_lam",
        division_type: "phường",
      },

      {
        id: 42,
        name: "Phường Cao Xanh",
        codename: "phuong_cao_xanh",
        division_type: "phường",
      },

      {
        id: 43,
        name: "Phường Hồng Gai",
        codename: "phuong_hong_gai",
        division_type: "phường",
      },

      {
        id: 44,
        name: "Phường Hạ Long",
        codename: "phuong_ha_long",
        division_type: "phường",
      },

      {
        id: 45,
        name: "Phường Hoành Bồ",
        codename: "phuong_hoanh_bo",
        division_type: "phường",
      },

      {
        id: 46,
        name: "Phường Mông Dương",
        codename: "phuong_mong_duong",
        division_type: "phường",
      },

      {
        id: 47,
        name: "Phường Quang Hanh",
        codename: "phuong_quang_hanh",
        division_type: "phường",
      },

      {
        id: 48,
        name: "Phường Cẩm Phả",
        codename: "phuong_cam_pha",
        division_type: "phường",
      },

      {
        id: 49,
        name: "Phường Cửa Ông",
        codename: "phuong_cua_ong",
        division_type: "phường",
      },

      {
        id: 50,
        name: "Phường Móng Cái 1",
        codename: "phuong_mong_cai_1",
        division_type: "phường",
      },

      {
        id: 51,
        name: "Phường Móng Cái 2",
        codename: "phuong_mong_cai_2",
        division_type: "phường",
      },

      {
        id: 52,
        name: "Phường Móng Cái 3",
        codename: "phuong_mong_cai_3",
        division_type: "phường",
      },

      {
        id: 53,
        name: "Đặc khu Vân Đồn",
        codename: "dac_khu_van_đon",
        division_type: "đặc khu",
      },

      {
        id: 54,
        name: "Đặc khu Cô Tô",
        codename: "dac_khu_co_to",
        division_type: "đặc khu",
      },
    ],
  },
  {
    id: 11,
    code: "24",
    name: "Tỉnh Bắc Ninh",
    codename: "tinh_bac_ninh",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Phường Kinh Bắc",
        codename: "phuong_kinh_bac",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Võ Cường",
        codename: "phuong_vo_cuong",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Vũ Ninh",
        codename: "phuong_vu_ninh",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường Hạp Lĩnh",
        codename: "phuong_hap_linh",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Nam Sơn",
        codename: "phuong_nam_son",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Từ Sơn",
        codename: "phuong_tu_son",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Tam Sơn",
        codename: "phuong_tam_son",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Đồng Nguyên",
        codename: "phuong_đong_nguyen",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Phù Khê",
        codename: "phuong_phu_khe",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Thuận Thành",
        codename: "phuong_thuan_thanh",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Mão Điền",
        codename: "phuong_mao_đien",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường Trạm Lộ",
        codename: "phuong_tram_lo",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường Trí Quả",
        codename: "phuong_tri_qua",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Song Liễu",
        codename: "phuong_song_lieu",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Ninh Xá",
        codename: "phuong_ninh_xa",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường Quế Võ",
        codename: "phuong_que_vo",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Phương Liễu",
        codename: "phuong_phuong_lieu",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Nhân Hòa",
        codename: "phuong_nhan_hoa",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Đào Viên",
        codename: "phuong_đao_vien",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Bồng Lai",
        codename: "phuong_bong_lai",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Xã Chi Lăng",
        codename: "xa_chi_lang",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Phù Lãng",
        codename: "xa_phu_lang",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Yên Phong",
        codename: "xa_yen_phong",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Văn Môn",
        codename: "xa_van_mon",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Tam Giang",
        codename: "xa_tam_giang",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Yên Trung",
        codename: "xa_yen_trung",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Tam Đa",
        codename: "xa_tam_đa",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Tiên Du",
        codename: "xa_tien_du",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Liên Bão",
        codename: "xa_lien_bao",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Tân Chi",
        codename: "xa_tan_chi",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Đại Đồng",
        codename: "xa_đai_đong",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Phật Tích",
        codename: "xa_phat_tich",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Gia Bình",
        codename: "xa_gia_binh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Nhân Thắng",
        codename: "xa_nhan_thang",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Đại Lai",
        codename: "xa_đai_lai",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Cao Đức",
        codename: "xa_cao_đuc",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Đông Cứu",
        codename: "xa_đong_cuu",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Lương Tài",
        codename: "xa_luong_tai",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Lâm Thao",
        codename: "xa_lam_thao",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Trung Chính",
        codename: "xa_trung_chinh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Trung Kênh",
        codename: "xa_trung_kenh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Đại Sơn",
        codename: "xa_đai_son",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Sơn Động",
        codename: "xa_son_đong",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Tây Yên Tử",
        codename: "xa_tay_yen_tu",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Dương Hưu",
        codename: "xa_duong_huu",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Yên Định",
        codename: "xa_yen_đinh",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã An Lạc",
        codename: "xa_an_lac",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Vân Sơn",
        codename: "xa_van_son",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Tuấn Đạo",
        codename: "xa_tuan_đao",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Biển Động",
        codename: "xa_bien_đong",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Lục Ngạn",
        codename: "xa_luc_ngan",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Đèo Gia",
        codename: "xa_đeo_gia",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Sơn Hải",
        codename: "xa_son_hai",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Tân Sơn",
        codename: "xa_tan_son",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Biên Sơn",
        codename: "xa_bien_son",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Sa Lý",
        codename: "xa_sa_ly",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Nam Dương",
        codename: "xa_nam_duong",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Kiên Lao",
        codename: "xa_kien_lao",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Phường Chũ",
        codename: "phuong_chu",
        division_type: "phường",
      },

      {
        id: 60,
        name: "Phường Phượng Sơn",
        codename: "phuong_phuong_son",
        division_type: "phường",
      },

      {
        id: 61,
        name: "Xã Lục Sơn",
        codename: "xa_luc_son",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Trường Sơn",
        codename: "xa_truong_son",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Cẩm Lý",
        codename: "xa_cam_ly",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Đông Phú",
        codename: "xa_đong_phu",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Nghĩa Phương",
        codename: "nghia_phuong",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Lục Nam",
        codename: "xa_luc_nam",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Bắc Lũng",
        codename: "xa_bac_lung",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Bảo Đài",
        codename: "bao_đai",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Lạng Giang",
        codename: "xa_lang_giang",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Mỹ Thái",
        codename: "xa_my_thai",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Kép",
        codename: "xa_kep",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Tân Dĩnh",
        codename: "xa_tan_dinh",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Tiên Lục",
        codename: "xa_tien_luc",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Ngọc Thiện",
        codename: "xa_ngoc_thien",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Nhã Nam",
        codename: "xa_nha_nam",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Phúc Hoà",
        codename: "xa_phuc_hoa",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Quang Trung",
        codename: "xa_quang_trung",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Hợp Thịnh",
        codename: "xa_hop_thinh",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Hiệp Hoà",
        codename: "xa_hiep_hoa",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Hoàng Vân",
        codename: "xa_hoang_van",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Xuân Cẩm",
        codename: "xa_xuan_cam",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Phường Tự Lan",
        codename: "phuong_tu_lan",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Việt Yên",
        codename: "phuong_viet_yen",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Nếnh",
        codename: "phuong_nenh",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Vân Hà",
        codename: "phuong_van_ha",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Xã Đồng Việt",
        codename: "xa_đong_viet",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Phường Bắc Giang",
        codename: "phuong_bac_giang",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Đa Mai",
        codename: "phuong_đa_mai",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Tiền Phong",
        codename: "phuong_tien_phong",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Tân An",
        codename: "phuong_tan_an",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Yên Dũng",
        codename: "phuong_yen_dung",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường Tân Tiến",
        codename: "phuong_tan_tien",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Cảnh Thuỵ",
        codename: "phuong_canh_thuy",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Xã Tân Yên",
        codename: "xa_tan_yen",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Yên Thế",
        codename: "xa_yen_the",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Bố Hạ",
        codename: "xa_bo_ha",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Đồng Kỳ",
        codename: "xa_đong_ky",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Xuân Lương",
        codename: "xa_xuan_luong",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Tam Tiến",
        codename: "xa_tam_tien",
        division_type: "xã",
      },
    ],
  },
  {
    id: 12,
    code: "25",
    name: "Tỉnh Phú Thọ",
    codename: "tinh_phu_tho",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Hy Cương",
        codename: "xa_hy_cuong",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Lâm Thao",
        codename: "xa_lam_thao",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Xuân Lũng",
        codename: "xa_xuan_lung",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Phùng Nguyên",
        codename: "xa_phung_nguyen",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Bản Nguyên",
        codename: "xa_ban_nguyen",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Phù Ninh",
        codename: "xa_phu_ninh",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Dân Chủ",
        codename: "xa_dan_chu",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Phú Mỹ",
        codename: "xa_phu_my",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Trạm Thản",
        codename: "xa_tram_than",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Bình Phú",
        codename: "xa_binh_phu",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Thanh Ba",
        codename: "xa_thanh_ba",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Quảng Yên",
        codename: "xa_quang_yen",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Hoàng Cương",
        codename: "xa_hoang_cuong",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Đông Thành",
        codename: "xa_đong_thanh",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Chí Tiên",
        codename: "xa_chi_tien",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Liên Minh",
        codename: "xa_lien_minh",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Đoan Hùng",
        codename: "xa_đoan_hung",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Tây Cốc",
        codename: "xa_tay_coc",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Chân Mộng",
        codename: "xa_chan_mong",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Chí Đám",
        codename: "xa_chi_đam",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Bằng Luân",
        codename: "xa_bang_luan",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Hạ Hòa",
        codename: "xa_ha_hoa",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Đan Thượng",
        codename: "xa_đan_thuong",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Yên Kỳ",
        codename: "xa_yen_ky",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Vĩnh Chân",
        codename: "xa_vinh_chan",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Văn Lang",
        codename: "xa_van_lang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Hiền Lương",
        codename: "xa_hien_luong",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Cẩm Khê",
        codename: "xa_cam_khe",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Phú Khê",
        codename: "xa_phu_khe",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Hùng Việt",
        codename: "xa_hung_viet",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Đồng Lương",
        codename: "xa_đong_luong",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tiên Lương",
        codename: "xa_tien_luong",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Vân Bán",
        codename: "xa_van_ban",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Tam Nông",
        codename: "xa_tam_nong",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Thọ Văn",
        codename: "xa_tho_van",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Vạn Xuân",
        codename: "xa_van_xuan",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Hiền Quan",
        codename: "xa_hien_quan",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Thanh Thủy",
        codename: "xa_thanh_thuy",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Đào Xá",
        codename: "xa_đao_xa",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Tu Vũ",
        codename: "xa_tu_vu",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Thanh Sơn",
        codename: "xa_thanh_son",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Võ Miếu",
        codename: "xa_vo_mieu",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Văn Miếu",
        codename: "xa_van_mieu",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Cự Đồng",
        codename: "xa_cu_đong",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Hương Cần",
        codename: "xa_huong_can",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Yên Sơn",
        codename: "xa_yen_son",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Khả Cửu",
        codename: "xa_kha_cuu",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Tân Sơn",
        codename: "xa_tan_son",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Minh Đài",
        codename: "xa_minh_đai",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Lai Đồng",
        codename: "xa_lai_đong",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Xuân Đài",
        codename: "xa_xuan_đai",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Long Cốc",
        codename: "xa_long_coc",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Yên Lập",
        codename: "xa_yen_lap",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Thượng Long",
        codename: "xa_thuong_long",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Sơn Lương",
        codename: "xa_son_luong",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Xuân Viên",
        codename: "xa_xuan_vien",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Minh Hòa",
        codename: "xa_minh_hoa",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Tam Sơn",
        codename: "xa_tam_son",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Sông Lô",
        codename: "xa_song_lo",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Hải Lựu",
        codename: "xa_hai_luu",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Yên Lãng",
        codename: "xa_yen_lang",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Lập Thạch",
        codename: "xa_lap_thach",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Tiên Lữ",
        codename: "xa_tien_lu",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Thái Hòa",
        codename: "xa_thai_hoa",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Liên Hòa",
        codename: "xa_lien_hoa",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Hợp Lý",
        codename: "xa_hop_ly",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Sơn Đông",
        codename: "xa_son_đong",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Tam Đảo",
        codename: "xa_tam_đao",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Đại Đình",
        codename: "xa_đai_đinh",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Đạo Trù",
        codename: "xa_đao_tru",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Tam Dương",
        codename: "xa_tam_duong",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Hội Thịnh",
        codename: "xa_hoi_thinh",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Hoàng An",
        codename: "xa_hoang_an",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Tam Dương Bắc",
        codename: "xa_tam_duong_bac",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Vĩnh Tường",
        codename: "xa_vinh_tuong",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Thổ Tang",
        codename: "xa_tho_tang",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Vĩnh Hưng",
        codename: "xa_vinh_hung",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Vĩnh An",
        codename: "xa_vinh_an",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Vĩnh Phú",
        codename: "xa_vinh_phu",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Vĩnh Thành",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Yên Lạc",
        codename: "xa_yen_lac",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Tề Lỗ",
        codename: "xa_te_lo",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Liên Châu",
        codename: "xa_lien_chau",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Tam Hồng",
        codename: "xa_tam_hong",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Nguyệt Đức",
        codename: "xa_nguyet_đuc",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Bình Nguyên",
        codename: "xa_binh_nguyen",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Xuân Lãng",
        codename: "xa_xuan_lang",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Bình Xuyên",
        codename: "xa_binh_xuyen",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Bình Tuyền",
        codename: "xa_binh_tuyen",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Thịnh Minh",
        codename: "xa_thinh_minh",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Cao Phong",
        codename: "xa_cao_phong",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Mường Thàng",
        codename: "xa_muong_thang",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Thung Nai",
        codename: "xa_thung_nai",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Đà Bắc",
        codename: "xa_đa_bac",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Cao Sơn",
        codename: "xa_cao_son",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Đức Nhàn",
        codename: "xa_đuc_nhan",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Quy Đức",
        codename: "xa_quy_đuc",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Tân Pheo",
        codename: "xa_tan_pheo",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Tiền Phong",
        codename: "xa_tien_phong",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Kim Bôi",
        codename: "xa_kim_boi",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Mường Động",
        codename: "xa_muong_đong",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Dũng Tiến",
        codename: "xa_dung_tien",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Hợp Kim",
        codename: "xa_hop_kim",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Nật Sơ",
        codename: "xa_nat_so",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Xã Lạc Sơn",
        codename: "xa_lac_son",
        division_type: "xã",
      },

      {
        id: 106,
        name: "Xã Mường Vang",
        codename: "xa_muong_vang",
        division_type: "xã",
      },

      {
        id: 107,
        name: "Xã Đại Đồng",
        codename: "xa_đai_đong",
        division_type: "xã",
      },

      {
        id: 108,
        name: "Xã Ngọc Sơn",
        codename: "xa_ngoc_son",
        division_type: "xã",
      },

      {
        id: 109,
        name: "Xã Nhân Nghĩa",
        codename: "xa_nhan_nghia",
        division_type: "xã",
      },

      {
        id: 110,
        name: "Xã Quyết Thắng",
        codename: "xa_quyet_thang",
        division_type: "xã",
      },

      {
        id: 111,
        name: "Xã Thượng Cốc",
        codename: "xa_thuong_coc",
        division_type: "xã",
      },

      {
        id: 112,
        name: "Xã Yên Phú",
        codename: "xa_yen_phu",
        division_type: "xã",
      },

      {
        id: 113,
        name: "Xã Lạc Thủy",
        codename: "xa_lac_thuy",
        division_type: "xã",
      },

      {
        id: 114,
        name: "Xã An Bình",
        codename: "xa_an_binh",
        division_type: "xã",
      },

      {
        id: 115,
        name: "Xã An Nghĩa",
        codename: "xa_an_nghia",
        division_type: "xã",
      },

      {
        id: 116,
        name: "Xã Lương Sơn",
        codename: "xa_luong_son",
        division_type: "xã",
      },

      {
        id: 117,
        name: "Xã Cao Dương",
        codename: "xa_cao_duong",
        division_type: "xã",
      },

      {
        id: 118,
        name: "Xã Liên Sơn",
        codename: "xa_lien_son",
        division_type: "xã",
      },

      {
        id: 119,
        name: "Xã Mai Châu",
        codename: "xa_mai_chau",
        division_type: "xã",
      },

      {
        id: 120,
        name: "Xã Bao La",
        codename: "xa_bao_la",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã Mai Hạ",
        codename: "xa_mai_ha",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Pà Cò",
        codename: "xa_pa_co",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Tân Mai",
        codename: "xa_tan_mai",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Tân Lạc",
        codename: "xa_tan_lac",
        division_type: "xã",
      },

      {
        id: 125,
        name: "Xã Mường Bi",
        codename: "xa_muong_bi",
        division_type: "xã",
      },

      {
        id: 126,
        name: "Xã Mường Hoa",
        codename: "xa_muong_hoa",
        division_type: "xã",
      },

      {
        id: 127,
        name: "Xã Toàn Thắng",
        codename: "xa_toan_thang",
        division_type: "xã",
      },

      {
        id: 128,
        name: "Xã Vân Sơn",
        codename: "xa_van_son",
        division_type: "xã",
      },

      {
        id: 129,
        name: "Xã Yên Thủy",
        codename: "xa_yen_thuy",
        division_type: "xã",
      },

      {
        id: 130,
        name: "Xã Lạc Lương",
        codename: "xa_lac_luong",
        division_type: "xã",
      },

      {
        id: 131,
        name: "Xã Yên Trị",
        codename: "xa_yen_tri",
        division_type: "xã",
      },

      {
        id: 132,
        name: "Phường Việt Trì",
        codename: "phuong_viet_tri",
        division_type: "xã",
      },

      {
        id: 133,
        name: "Phường Nông Trang",
        codename: "phuong_nong_trang",
        division_type: "xã",
      },

      {
        id: 134,
        name: "Phường Thanh Miếu",
        codename: "phuong_thanh_mieu",
        division_type: "xã",
      },

      {
        id: 135,
        name: "Phường Vân Phú",
        codename: "phuong_van_phu",
        division_type: "xã",
      },

      {
        id: 136,
        name: "Phường Phú Thọ",
        codename: "phuong_phu_tho",
        division_type: "xã",
      },

      {
        id: 137,
        name: "Phường Phong Châu",
        codename: "phuong_phong_chau",
        division_type: "xã",
      },

      {
        id: 138,
        name: "Phường Âu Cơ",
        codename: "phuong_au_co",
        division_type: "xã",
      },

      {
        id: 139,
        name: "Phường Vĩnh Phúc",
        codename: "phuong_vinh_phuc",
        division_type: "xã",
      },

      {
        id: 140,
        name: "Phường Vĩnh Yên",
        codename: "phuong_vinh_yen",
        division_type: "xã",
      },

      {
        id: 141,
        name: "Phường Phúc Yên",
        codename: "phuong_phuc_yen",
        division_type: "xã",
      },

      {
        id: 142,
        name: "Phường Xuân Hòa",
        codename: "phuong_xuan_hoa",
        division_type: "xã",
      },

      {
        id: 143,
        name: "Phường Hòa Bình",
        codename: "phuong_hoa_binh",
        division_type: "xã",
      },

      {
        id: 144,
        name: "Phường Kỳ Sơn",
        codename: "phuong_ky_son",
        division_type: "xã",
      },

      {
        id: 145,
        name: "Phường Tân Hòa",
        codename: "phuong_tan_hoa",
        division_type: "xã",
      },

      {
        id: 146,
        name: "Phường Thống Nhất",
        codename: "phuong_thong_nhat",
        division_type: "xã",
      },

      {
        id: 147,
        name: "Xã Thu Cúc",
        codename: "xa_thu_cuc",
        division_type: "xã",
      },

      {
        id: 148,
        name: "Xã Trung Sơn",
        codename: "xa_trung_son",
        division_type: "xã",
      },
    ],
  },
  {
    id: 13,
    code: "31",
    name: "Thành phố Hải Phòng",
    codename: "thanh_pho_hai_phong",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường Thủy Nguyên",
        codename: "phuong_thuy_nguyen",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Thiên Hương",
        codename: "phuong_thien_huong",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Hòa Bình",
        codename: "phuong_hoa_binh",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường Nam Triệu",
        codename: "phuong_nam_trieu",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Bạch Đằng",
        codename: "phuong_bach_đang",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Lưu Kiếm",
        codename: "phuong_luu_kiem",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Lê Ích Mộc",
        codename: "phuong_le_ich_moc",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Hồng Bàng",
        codename: "phuong_hong_bang",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Hồng An",
        codename: "phuong_hong_an",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Ngô Quyền",
        codename: "phuong_ngo_quyen",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Gia Viên",
        codename: "phuong_gia_vien",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường Lê Chân",
        codename: "phuong_le_chan",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường An Biên",
        codename: "phuong_an_bien",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Hải An",
        codename: "phuong_hai_an",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Đông Hải",
        codename: "phuong_đong_hai",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường Kiến An",
        codename: "phuong_kien_an",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Phù Liễn",
        codename: "phuong_phu_lien",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Nam Đồ Sơn",
        codename: "phuong_nam_đo_son",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Đồ Sơn",
        codename: "phuong_đo_son",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Hưng Đạo",
        codename: "phuong_hung_đao",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Phường Dương Kinh",
        codename: "phuong_duong_kinh",
        division_type: "phường",
      },

      {
        id: 22,
        name: "Phường An Dương",
        codename: "phuong_an_duong",
        division_type: "phường",
      },

      {
        id: 23,
        name: "Phường An Hải",
        codename: "phuong_an_hai",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Phường An Phong",
        codename: "phuong_an_phong",
        division_type: "phường",
      },

      {
        id: 25,
        name: "Phường Hải Dương",
        codename: "phuong_hai_duong",
        division_type: "phường",
      },

      {
        id: 26,
        name: "Phường Lê Thanh Nghị",
        codename: "phuong_le_thanh_nghi",
        division_type: "phường",
      },

      {
        id: 27,
        name: "Phường Việt Hòa",
        codename: "phuong_viet_hoa",
        division_type: "phường",
      },

      {
        id: 28,
        name: "Phường Thành Đông",
        codename: "phuong_thanh_đong",
        division_type: "phường",
      },

      {
        id: 29,
        name: "Phường Nam Đồng",
        codename: "phuong_nam_đong",
        division_type: "phường",
      },

      {
        id: 30,
        name: "Phường Tân Hưng",
        codename: "phuong_tan_hung",
        division_type: "phường",
      },

      {
        id: 31,
        name: "Phường Thạch Khôi",
        codename: "phuong_thach_khoi",
        division_type: "phường",
      },

      {
        id: 32,
        name: "Phường Tứ Minh",
        codename: "phuong_tu_minh",
        division_type: "phường",
      },

      {
        id: 33,
        name: "Phường Ái Quốc",
        codename: "phuong_ai_quoc",
        division_type: "phường",
      },

      {
        id: 34,
        name: "Phường Chu Văn An",
        codename: "phuong_chu_van_an",
        division_type: "phường",
      },

      {
        id: 35,
        name: "Phường Chí Linh",
        codename: "phuong_chi_linh",
        division_type: "phường",
      },

      {
        id: 36,
        name: "Phường Trần Hưng Đạo",
        codename: "phuong_tran_hung_đao",
        division_type: "phường",
      },

      {
        id: 37,
        name: "Phường Nguyễn Trãi",
        codename: "phuong_nguyen_trai",
        division_type: "phường",
      },

      {
        id: 38,
        name: "Phường Trần Nhân Tông",
        codename: "phuong_tran_nhan_tong",
        division_type: "phường",
      },

      {
        id: 39,
        name: "Phường Lê Đại Hành",
        codename: "phuong_le_đai_hanh",
        division_type: "phường",
      },

      {
        id: 40,
        name: "Phường Kinh Môn",
        codename: "phuong_kinh_mon",
        division_type: "phường",
      },

      {
        id: 41,
        name: "Phường Nguyễn Đại Năng",
        codename: "phuong_nguyen_đai_nang",
        division_type: "phường",
      },

      {
        id: 42,
        name: "Phường Trần Liễu",
        codename: "phuong_tran_lieu",
        division_type: "phường",
      },

      {
        id: 43,
        name: "Phường Bắc An Phụ",
        codename: "phuong_bac_an_phu",
        division_type: "phường",
      },

      {
        id: 44,
        name: "Phường Phạm Sư Mạnh",
        codename: "phuong_pham_su_manh",
        division_type: "phường",
      },

      {
        id: 45,
        name: "Phường Nhị Chiểu",
        codename: "phuong_nhi_chieu",
        division_type: "phường",
      },

      {
        id: 46,
        name: "Xã An Hưng",
        codename: "xa_an_hung",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã An Khánh",
        codename: "xa_an_khanh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã An Quang",
        codename: "xa_an_quang",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã An Trường",
        codename: "xa_an_truong",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã An Lão",
        codename: "xa_an_lao",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Kiến Thụy",
        codename: "xa_kien_thuy",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Kiến Minh",
        codename: "xa_kien_minh",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Kiến Hải",
        codename: "xa_kien_hai",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Kiến Hưng",
        codename: "xa_kien_hung",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Nghi Dương",
        codename: "xa_nghi_duong",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Quyết Thắng",
        codename: "xa_quyet_thang",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Tiên Lãng",
        codename: "xa_tien_lang",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Tân Minh",
        codename: "xa_tan_minh",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Tiên Minh",
        codename: "xa_tien_minh",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Chấn Hưng",
        codename: "xa_chan_hung",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Hùng Thắng",
        codename: "xa_hung_thang",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Vĩnh Bảo",
        codename: "xa_vinh_bao",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Nguyễn Bỉnh Khiêm",
        codename: "xa_nguyen_binh_khiem",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Vĩnh Am",
        codename: "xa_vinh_am",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Vĩnh Hải",
        codename: "xa_vinh_hai",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Vĩnh Hòa",
        codename: "xa_vinh_hoa",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Vĩnh Thịnh",
        codename: "xa_vinh_thinh",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Vĩnh Thuận",
        codename: "xa_vinh_thuan",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Việt Khê",
        codename: "xa_viet_khe",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Nam An Phụ",
        codename: "xa_nam_an_phu",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Nam Sách",
        codename: "xa_nam_sach",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Thái Tân",
        codename: "xa_thai_tan",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Trần Phú",
        codename: "xa_tran_phu",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Hợp Tiến",
        codename: "xa_hop_tien",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã An Phú",
        codename: "xa_an_phu",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Thanh Hà",
        codename: "xa_thanh_ha",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Hà Tây",
        codename: "xa_ha_tay",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Hà Bắc",
        codename: "xa_ha_bac",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Hà Nam",
        codename: "xa_ha_nam",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Hà Đông",
        codename: "xa_ha_đong",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Mao Điền",
        codename: "xa_mao_đien",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Cẩm Giàng",
        codename: "xa_cam_giang",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Cẩm Giang",
        codename: "xa_cam_giang",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Tuệ Tĩnh",
        codename: "xa_tue_tinh",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Kẻ Sặt",
        codename: "xa_ke_sat",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Bình Giang",
        codename: "xa_binh_giang",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Đường An",
        codename: "xa_đuong_an",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Thượng Hồng",
        codename: "xa_thuong_hong",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Gia Lộc",
        codename: "xa_gia_loc",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Yết Kiêu",
        codename: "xa_yet_kieu",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Gia Phúc",
        codename: "xa_gia_phuc",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Trường Tân",
        codename: "xa_truong_tan",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Tứ Kỳ",
        codename: "xa_tu_ky",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Tân Kỳ",
        codename: "xa_tan_ky",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Đại Sơn",
        codename: "xa_đai_son",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Chí Minh",
        codename: "xa_chi_minh",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Lạc Phượng",
        codename: "xa_lac_phuong",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Nguyên Giáp",
        codename: "xa_nguyen_giap",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Ninh Giang",
        codename: "xa_ninh_giang",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Vĩnh Lại",
        codename: "xa_vinh_lai",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Khúc Thừa Dụ",
        codename: "xa_khuc_thua_du",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Hồng Châu",
        codename: "xa_hong_chau",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Thanh Miện",
        codename: "xa_thanh_mien",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Xã Bắc Thanh Miện",
        codename: "xa_bac_thanh_mien",
        division_type: "xã",
      },

      {
        id: 106,
        name: "Xã Hải Hưng",
        codename: "xa_hai_hung",
        division_type: "xã",
      },

      {
        id: 107,
        name: "Xã Nguyễn Lương Bằng",
        codename: "xa_nguyen_luong_bang",
        division_type: "xã",
      },

      {
        id: 108,
        name: "Xã Nam Thanh Miện",
        codename: "xa_nam_thanh_mien",
        division_type: "xã",
      },

      {
        id: 109,
        name: "Xã Phú Thái",
        codename: "xa_phu_thai",
        division_type: "xã",
      },

      {
        id: 110,
        name: "Xã Lai Khê",
        codename: "xa_lai_khe",
        division_type: "xã",
      },

      {
        id: 111,
        name: "Xã An Thành",
        codename: "xa_an_thanh",
        division_type: "xã",
      },

      {
        id: 112,
        name: "Xã Kim Thành",
        codename: "xa_kim_thanh",
        division_type: "xã",
      },

      {
        id: 113,
        name: "Đặc khu Cát Hải",
        codename: "dac_khu_cat_hai",
        division_type: "đặc khu",
      },

      {
        id: 114,
        name: "Đặc khu Bạch Long Vĩ",
        codename: "dac_khu_bach_long_vi",
        division_type: "đặc khu",
      },
    ],
  },
  {
    id: 14,
    code: "33",
    name: "Tỉnh Hưng Yên",
    codename: "tinh_hung_yen",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Tân Hưng",
        codename: "xa_tan_hung",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Hoàng Hoa Thám",
        codename: "xa_hoang_hoa_tham",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tiên Lữ",
        codename: "xa_tien_lu",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Tiên Hoa",
        codename: "xa_tien_hoa",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Quang Hưng",
        codename: "xa_quang_hung",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Đoàn Đào",
        codename: "xa_đoan_đao",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Tiên Tiến",
        codename: "xa_tien_tien",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Tống Trân",
        codename: "xa_tong_tran",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Lương Bằng",
        codename: "xa_luong_bang",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Nghĩa Dân",
        codename: "xa_nghia_dan",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Hiệp Cường",
        codename: "xa_hiep_cuong",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Đức Hợp",
        codename: "xa_đuc_hop",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Ân Thi",
        codename: "xa_an_thi",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Xuân Trúc",
        codename: "xa_xuan_truc",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Phạm Ngũ Lão",
        codename: "xa_pham_ngu_lao",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Nguyễn Trãi",
        codename: "xa_nguyen_trai",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Hồng Quang",
        codename: "xa_hong_quang",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Khoái Châu",
        codename: "xa_khoai_chau",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Triệu Việt Vương",
        codename: "xa_trieu_viet_vuong",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Việt Tiến",
        codename: "xa_viet_tien",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Chí Minh",
        codename: "xa_chi_minh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Châu Ninh",
        codename: "xa_chau_ninh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Yên Mỹ",
        codename: "xa_yen_my",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Việt Yên",
        codename: "xa_viet_yen",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Hoàn Long",
        codename: "xa_hoan_long",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Nguyễn Văn Linh",
        codename: "xa_nguyen_van_linh",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Như Quỳnh",
        codename: "xa_nhu_quynh",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Lạc Đạo",
        codename: "xa_lac_đao",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Đại Đồng",
        codename: "xa_đai_đong",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Nghĩa Trụ",
        codename: "xa_nghia_tru",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Phụng Công",
        codename: "xa_phung_cong",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Văn Giang",
        codename: "xa_van_giang",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Mễ Sở",
        codename: "xa_me_so",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Thái Thụy",
        codename: "xa_thai_thuy",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Đông Thụy Anh",
        codename: "xa_đong_thuy_anh",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Bắc Thụy Anh",
        codename: "xa_bac_thuy_anh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Thụy Anh",
        codename: "xa_thuy_anh",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Nam Thụy Anh",
        codename: "xa_nam_thuy_anh",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Bắc Thái Ninh",
        codename: "xa_bac_thai_ninh",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Thái Ninh",
        codename: "xa_thai_ninh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Đông Thái Ninh",
        codename: "xa_đong_thai_ninh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Nam Thái Ninh",
        codename: "xa_nam_thai_ninh",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Tây Thái Ninh",
        codename: "xa_tay_thai_ninh",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Tây Thụy Anh",
        codename: "xa_tay_thuy_anh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Tiền Hải",
        codename: "xa_tien_hai",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Tây Tiền Hải",
        codename: "xa_tay_tien_hai",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Ái Quốc",
        codename: "xa_ai_quoc",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Đồng Châu",
        codename: "xa_đong_chau",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Đông Tiền Hải",
        codename: "xa_đong_tien_hai",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Nam Cường",
        codename: "xa_nam_cuong",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hưng Phú",
        codename: "xa_hung_phu",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Nam Tiền Hải",
        codename: "xa_nam_tien_hai",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Đông Hưng",
        codename: "xa_đong_hung",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Bắc Tiên Hưng",
        codename: "xa_bac_tien_hung",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Đông Tiên Hưng",
        codename: "xa_đong_tien_hung",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Nam Đông Hưng",
        codename: "xa_nam_đong_hung",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Bắc Đông Quan",
        codename: "xa_bac_đong_quan",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Bắc Đông Hưng",
        codename: "xa_bac_đong_hung",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Đông Quan",
        codename: "xa_đong_quan",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Nam Tiên Hưng",
        codename: "xa_nam_tien_hung",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Tiên Hưng",
        codename: "xa_tien_hung",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Quỳnh Phụ",
        codename: "xa_quynh_phu",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Minh Thọ",
        codename: "xa_minh_tho",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Nguyễn Du",
        codename: "xa_nguyen_du",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Quỳnh An",
        codename: "xa_quynh_an",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Ngọc Lâm",
        codename: "xa_ngoc_lam",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Đồng Bằng",
        codename: "xa_đong_bang",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã A Sào",
        codename: "xa_a_sao",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Phụ Dực",
        codename: "xa_phu_duc",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Hưng Hà",
        codename: "xa_hung_ha",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Tiên La",
        codename: "xa_tien_la",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Lê Quý Đôn",
        codename: "xa_le_quy_đon",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Hồng Minh",
        codename: "xa_hong_minh",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Thần Khê",
        codename: "xa_than_khe",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Diên Hà",
        codename: "xa_dien_ha",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Ngự Thiên",
        codename: "xa_ngu_thien",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Long Hưng",
        codename: "xa_long_hung",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Kiến Xương",
        codename: "xa_kien_xuong",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Lê Lợi",
        codename: "xa_le_loi",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Quang Lịch",
        codename: "xa_quang_lich",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Vũ Quý",
        codename: "xa_vu_quy",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Bình Thanh",
        codename: "xa_binh_thanh",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Bình Định",
        codename: "xa_binh_đinh",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Hồng Vũ",
        codename: "xa_hong_vu",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Bình Nguyên",
        codename: "xa_binh_nguyen",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Trà Giang",
        codename: "xa_tra_giang",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Vũ Thư",
        codename: "xa_vu_thu",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Thư Trì",
        codename: "xa_thu_tri",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Tân Thuận",
        codename: "xa_tan_thuan",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Thư Vũ",
        codename: "xa_thu_vu",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Vũ Tiên",
        codename: "xa_vu_tien",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Vạn Xuân",
        codename: "xa_van_xuan",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Phường Phố Hiến",
        codename: "phuong_pho_hien",
        division_type: "phường",
      },

      {
        id: 95,
        name: "Phường Sơn Nam",
        codename: "phuong_son_nam",
        division_type: "phường",
      },

      {
        id: 96,
        name: "Phường Hồng Châu",
        codename: "phuong_hong_chau",
        division_type: "phường",
      },

      {
        id: 97,
        name: "Phường Mỹ Hào",
        codename: "phuong_my_hao",
        division_type: "phường",
      },

      {
        id: 98,
        name: "Phường Đường Hào",
        codename: "phuong_đuong_hao",
        division_type: "phường",
      },

      {
        id: 99,
        name: "Phường Thượng Hồng",
        codename: "phuong_thuong_hong",
        division_type: "phường",
      },

      {
        id: 100,
        name: "Phường Thái Bình",
        codename: "phuong_thai_binh",
        division_type: "phường",
      },

      {
        id: 101,
        name: "Phường Trần Lãm",
        codename: "phuong_tran_lam",
        division_type: "phường",
      },

      {
        id: 102,
        name: "Phường Trần Hưng Đạo",
        codename: "phuong_tran_hung_đao",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Trà Lý",
        codename: "phuong_tra_ly",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường Vũ Phúc",
        codename: "phuong_vu_phuc",
        division_type: "phường",
      },
    ],
  },
  {
    id: 15,
    code: "37",
    name: "Tỉnh Ninh Bình",
    codename: "tinh_ninh_binh",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Bình Lục",
        codename: "xa_binh_luc",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Bình Mỹ",
        codename: "xa_binh_my",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Bình An",
        codename: "xa_binh_an",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Bình Giang",
        codename: "xa_binh_giang",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Bình Sơn",
        codename: "xa_binh_son",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Liêm Hà",
        codename: "xa_liem_ha",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Tân Thanh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Thanh Bình",
        codename: "xa_thanh_binh",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Thanh Lâm",
        codename: "xa_thanh_lam",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Thanh Liêm",
        codename: "xa_thanh_liem",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Lý Nhân",
        codename: "xa_ly_nhan",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Nam Xang",
        codename: "xa_nam_xang",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Bắc Lý",
        codename: "xa_bac_ly",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Vĩnh Trụ",
        codename: "xa_vinh_tru",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Trần Thương",
        codename: "xa_tran_thuong",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Nhân Hà",
        codename: "xa_nhan_ha",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Nam Lý",
        codename: "xa_nam_ly",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Nam Trực",
        codename: "xa_nam_truc",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Nam Minh",
        codename: "xa_nam_minh",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Nam Đồng",
        codename: "xa_nam_đong",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Nam Ninh",
        codename: "xa_nam_ninh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Nam Hồng",
        codename: "xa_nam_hong",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Minh Tân",
        codename: "xa_minh_tan",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Hiển Khánh",
        codename: "xa_hien_khanh",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Vụ Bản",
        codename: "xa_vu_ban",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Liên Minh",
        codename: "xa_lien_minh",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Ý Yên",
        codename: "xa_y_yen",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Yên Đồng",
        codename: "xa_yen_đong",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Yên Cường",
        codename: "xa_yen_cuong",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Vạn Thắng",
        codename: "xa_van_thang",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Vũ Dương",
        codename: "xa_vu_duong",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tân Minh",
        codename: "xa_tan_minh",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Phong Doanh",
        codename: "xa_phong_doanh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Cổ Lễ",
        codename: "xa_co_le",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Ninh Giang",
        codename: "xa_ninh_giang",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Cát Thành",
        codename: "xa_cat_thanh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Trực Ninh",
        codename: "xa_truc_ninh",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Quang Hưng",
        codename: "xa_quang_hung",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Minh Thái",
        codename: "xa_minh_thai",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Ninh Cường",
        codename: "xa_ninh_cuong",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Xuân Trường",
        codename: "xa_xuan_truong",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Xuân Hưng",
        codename: "xa_xuan_hung",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Xuân Giang",
        codename: "xa_xuan_giang",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Xuân Hồng",
        codename: "xa_xuan_hong",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Hải Hậu",
        codename: "xa_hai_hau",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Hải Anh",
        codename: "xa_hai_anh",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Hải Tiến",
        codename: "xa_hai_tien",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Hải Hưng",
        codename: "xa_hai_hung",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Hải An",
        codename: "xa_hai_an",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Hải Quang",
        codename: "xa_hai_quang",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hải Xuân",
        codename: "xa_hai_xuan",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Hải Thịnh",
        codename: "xa_hai_thinh",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Giao Minh",
        codename: "xa_giao_minh",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Giao Hòa",
        codename: "xa_giao_hoa",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Giao Thủy",
        codename: "xa_giao_thuy",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Giao Phúc",
        codename: "xa_giao_phuc",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Giao Hưng",
        codename: "xa_giao_hung",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Giao Bình",
        codename: "xa_giao_binh",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Giao Ninh",
        codename: "xa_giao_ninh",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Đồng Thịnh",
        codename: "xa_đong_thinh",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Nghĩa Hưng",
        codename: "xa_nghia_hung",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Nghĩa Sơn",
        codename: "xa_nghia_son",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Hồng Phong",
        codename: "xa_hong_phong",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Quỹ Nhất",
        codename: "xa_quy_nhat",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Nghĩa Lâm",
        codename: "xa_nghia_lam",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Rạng Đông",
        codename: "xa_rang_đong",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Gia Viễn",
        codename: "xa_gia_vien",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Đại Hoàng",
        codename: "xa_đai_hoang",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Gia Hưng",
        codename: "xa_gia_hung",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Gia Phong",
        codename: "xa_gia_phong",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Gia Vân",
        codename: "xa_gia_van",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Gia Trấn",
        codename: "xa_gia_tran",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Nho Quan",
        codename: "xa_nho_quan",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Gia Lâm",
        codename: "xa_gia_lam",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Gia Tường",
        codename: "xa_gia_tuong",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Phú Sơn",
        codename: "xa_phu_son",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Cúc Phương",
        codename: "xa_cuc_phuong",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Phú Long",
        codename: "xa_phu_long",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Thanh Sơn",
        codename: "xa_thanh_son",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Quỳnh Lưu",
        codename: "xa_quynh_luu",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Yên Khánh",
        codename: "xa_yen_khanh",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Khánh Nhạc",
        codename: "xa_khanh_nhac",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Khánh Thiện",
        codename: "xa_khanh_thien",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Khánh Hội",
        codename: "xa_khanh_hoi",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Khánh Trung",
        codename: "xa_khanh_trung",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Yên Mô",
        codename: "xa_yen_mo",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Yên Từ",
        codename: "xa_yen_tu",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Yên Mạc",
        codename: "xa_yen_mac",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Đồng Thái",
        codename: "xa_đong_thai",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Chất Bình",
        codename: "xa_chat_binh",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Kim Sơn",
        codename: "xa_kim_son",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Quang Thiện",
        codename: "xa_quang_thien",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Phát Diệm",
        codename: "xa_phat_diem",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Lai Thành",
        codename: "xa_lai_thanh",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Định Hóa",
        codename: "xa_đinh_hoa",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Bình Minh",
        codename: "xa_binh_minh",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Kim Đông",
        codename: "xa_kim_đong",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Phường Duy Tiên",
        codename: "phuong_duy_tien",
        division_type: "phường",
      },

      {
        id: 99,
        name: "Phường Duy Tân",
        codename: "phuong_duy_tan",
        division_type: "phường",
      },

      {
        id: 100,
        name: "Phường Đồng Văn",
        codename: "phuong_đong_van",
        division_type: "phường",
      },

      {
        id: 101,
        name: "Phường Duy Hà",
        codename: "phuong_duy_ha",
        division_type: "phường",
      },

      {
        id: 102,
        name: "Phường Tiên Sơn",
        codename: "phuong_tien_son",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Lê Hồ",
        codename: "phuong_le_ho",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường Nguyễn Úy",
        codename: "phuong_nguyen_uy",
        division_type: "phường",
      },

      {
        id: 105,
        name: "Phường Lý Thường Kiệt",
        codename: "phuong_ly_thuong_kiet",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường Kim Thanh",
        codename: "phuong_kim_thanh",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường Tam Chúc",
        codename: "phuong_tam_chuc",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường Kim Bảng",
        codename: "phuong_kim_bang",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường Hà Nam",
        codename: "phuong_ha_nam",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường Phù Vân",
        codename: "phuong_phu_van",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường Châu Sơn",
        codename: "phuong_chau_son",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Phủ Lý",
        codename: "phuong_phu_ly",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Phường Liêm Tuyền",
        codename: "phuong_liem_tuyen",
        division_type: "phường",
      },

      {
        id: 114,
        name: "Phường Nam Định",
        codename: "phuong_nam_đinh",
        division_type: "phường",
      },

      {
        id: 115,
        name: "Phường Thiên Trường",
        codename: "phuong_thien_truong",
        division_type: "phường",
      },

      {
        id: 116,
        name: "Phường Đông A",
        codename: "phuong_đong_a",
        division_type: "phường",
      },

      {
        id: 117,
        name: "Phường Vị Khê",
        codename: "phuong_vi_khe",
        division_type: "phường",
      },

      {
        id: 118,
        name: "Phường Thành Nam",
        codename: "phuong_thanh_nam",
        division_type: "phường",
      },

      {
        id: 119,
        name: "Phường Trường Thi",
        codename: "phuong_truong_thi",
        division_type: "phường",
      },

      {
        id: 120,
        name: "Phường Hồng Quang",
        codename: "phuong_hong_quang",
        division_type: "phường",
      },

      {
        id: 121,
        name: "Phường Mỹ Lộc",
        codename: "phuong_my_loc",
        division_type: "phường",
      },

      {
        id: 122,
        name: "Phường Tây Hoa Lư",
        codename: "phuong_tay_hoa_lu",
        division_type: "phường",
      },

      {
        id: 123,
        name: "Phường Hoa Lư",
        codename: "phuong_hoa_lu",
        division_type: "phường",
      },

      {
        id: 124,
        name: "Phường Nam Hoa Lư",
        codename: "phuong_nam_hoa_lu",
        division_type: "phường",
      },

      {
        id: 125,
        name: "Phường Đông Hoa Lư",
        codename: "phuong_đong_hoa_lu",
        division_type: "phường",
      },

      {
        id: 126,
        name: "Phường Tam Điệp",
        codename: "phuong_tam_điep",
        division_type: "phường",
      },

      {
        id: 127,
        name: "Phường Yên Sơn",
        codename: "phuong_yen_son",
        division_type: "phường",
      },

      {
        id: 128,
        name: "Phường Trung Sơn",
        codename: "phuong_trung_son",
        division_type: "phường",
      },

      {
        id: 129,
        name: "Phường Yên Thắng",
        codename: "phuong_yen_thang",
        division_type: "phường",
      },
    ],
  },
  {
    id: 16,
    code: "38",
    name: "Tỉnh Thanh Hóa",
    codename: "tinh_thanh_hoa",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Các Sơn",
        codename: "xa_cac_son",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Trường Lâm",
        codename: "xa_truong_lam",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Hà Trung",
        codename: "xa_ha_trung",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Tống Sơn",
        codename: "xa_tong_son",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Hà Long",
        codename: "xa_ha_long",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Hoạt Giang",
        codename: "xa_hoat_giang",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Lĩnh Toại",
        codename: "xa_linh_toai",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Triệu Lộc",
        codename: "xa_trieu_loc",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Đông Thành",
        codename: "xa_đong_thanh",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Hậu Lộc",
        codename: "xa_hau_loc",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Hoa Lộc",
        codename: "xa_hoa_loc",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Vạn Lộc",
        codename: "xa_van_loc",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Nga Sơn",
        codename: "xa_nga_son",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nga Thắng",
        codename: "xa_nga_thang",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Hồ Vương",
        codename: "xa_ho_vuong",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Nga An",
        codename: "xa_nga_an",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Ba Đình",
        codename: "xa_ba_đinh",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Hoằng Hóa",
        codename: "xa_hoang_hoa",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Hoàng Tiến",
        codename: "xa_hoang_tien",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Hoằng Thanh",
        codename: "xa_hoang_thanh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Hoằng Lộc",
        codename: "xa_hoang_loc",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Hoằng Châu",
        codename: "xa_hoang_chau",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Hoằng Sơn",
        codename: "xa_hoang_son",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Hoằng Phú",
        codename: "xa_hoang_phu",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Hoằng Giang",
        codename: "xa_hoang_giang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Lưu Vệ",
        codename: "xa_luu_ve",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Quảng Yên",
        codename: "xa_quang_yen",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Quảng Ngọc",
        codename: "xa_quang_ngoc",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Quảng Ninh",
        codename: "xa_quang_ninh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Quảng Bình",
        codename: "xa_quang_binh",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tiên Trang",
        codename: "xa_tien_trang",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Quảng Chính",
        codename: "xa_quang_chinh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Nông Cống",
        codename: "xa_nong_cong",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Thắng Lợi",
        codename: "xa_thang_loi",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Trung Chính",
        codename: "xa_trung_chinh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Trường Văn",
        codename: "xa_truong_van",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Thăng Bình",
        codename: "xa_thang_binh",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Tượng Lĩnh",
        codename: "xa_tuong_linh",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Công Chính",
        codename: "xa_cong_chinh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Thiệu Hóa",
        codename: "xa_thieu_hoa",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Thiệu Quang",
        codename: "xa_thieu_quang",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Thiệu Tiến",
        codename: "xa_thieu_tien",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Thiệu Toán",
        codename: "xa_thieu_toan",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Thiệu Trung",
        codename: "xa_thieu_trung",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Yên Định",
        codename: "xa_yen_đinh",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Yên Trường",
        codename: "xa_yen_truong",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Yên Phú",
        codename: "xa_yen_phu",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Quý Lộc",
        codename: "xa_quy_loc",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Yên Ninh",
        codename: "xa_yen_ninh",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Định Tân",
        codename: "xa_đinh_tan",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Định Hòa",
        codename: "xa_đinh_hoa",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Thọ Xuân",
        codename: "xa_tho_xuan",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Thọ Long",
        codename: "xa_tho_long",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Xuân Hòa",
        codename: "xa_xuan_hoa",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Sao Vàng",
        codename: "xa_sao_vang",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Lam Sơn",
        codename: "xa_lam_son",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Thọ Lập",
        codename: "xa_tho_lap",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Xuân Tín",
        codename: "xa_xuan_tin",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Xuân Lập",
        codename: "xa_xuan_lap",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Vĩnh Lộc",
        codename: "xa_vinh_loc",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Tây Đô",
        codename: "xa_tay_đo",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Biện Thượng",
        codename: "xa_bien_thuong",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Triệu Sơn",
        codename: "xa_trieu_son",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Thọ Bình",
        codename: "xa_tho_binh",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Thọ Ngọc",
        codename: "xa_tho_ngoc",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Thọ Phú",
        codename: "xa_tho_phu",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Hợp Tiến",
        codename: "xa_hop_tien",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã An Nông",
        codename: "xa_an_nong",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Tân Ninh",
        codename: "xa_tan_ninh",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Đồng Tiến",
        codename: "xa_đong_tien",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Hồi Xuân",
        codename: "xa_hoi_xuan",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Nam Xuân",
        codename: "xa_nam_xuan",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Thiên Phủ",
        codename: "xa_thien_phu",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Hiền Kiệt",
        codename: "xa_hien_kiet",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Phú Lệ",
        codename: "xa_phu_le",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Trung Thành",
        codename: "xa_trung_thanh",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Tam Lư",
        codename: "xa_tam_lu",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Quan Sơn",
        codename: "xa_quan_son",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Trung Hạ",
        codename: "xa_trung_ha",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Linh Sơn",
        codename: "xa_linh_son",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Đồng Lương",
        codename: "xa_đong_luong",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Văn Phú",
        codename: "xa_van_phu",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Giao An",
        codename: "xa_giao_an",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Bá Thước",
        codename: "xa_ba_thuoc",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Thiết Ống",
        codename: "xa_thiet_ong",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Văn Nho",
        codename: "xa_van_nho",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Điền Quang",
        codename: "xa_đien_quang",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Điền Lư",
        codename: "xa_đien_lu",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Quý Lương",
        codename: "xa_quy_luong",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Cổ Lũng",
        codename: "xa_co_lung",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Pù Luông",
        codename: "xa_pu_luong",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Ngọc Lặc",
        codename: "xa_ngoc_lac",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Thạch Lập",
        codename: "xa_thach_lap",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Ngọc Liên",
        codename: "xa_ngoc_lien",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Minh Sơn",
        codename: "xa_minh_son",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Nguyệt Ấn",
        codename: "xa_nguyet_an",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Kiên Thọ",
        codename: "xa_kien_tho",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Cẩm Thạch",
        codename: "xa_cam_thach",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Cẩm Thủy",
        codename: "xa_cam_thuy",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Cẩm Tú",
        codename: "xa_cam_tu",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Cẩm Vân",
        codename: "xa_cam_van",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Cẩm Tân",
        codename: "xa_cam_tan",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Kim Tân",
        codename: "xa_kim_tan",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Xã Vân Du",
        codename: "xa_van_du",
        division_type: "xã",
      },

      {
        id: 106,
        name: "Xã Ngọc Trạo",
        codename: "xa_ngoc_trao",
        division_type: "xã",
      },

      {
        id: 107,
        name: "Xã Thạch Bình",
        codename: "xa_thach_binh",
        division_type: "xã",
      },

      {
        id: 108,
        name: "Xã Thành Vinh",
        codename: "xa_thanh_vinh",
        division_type: "xã",
      },

      {
        id: 109,
        name: "Xã Thạch Quảng",
        codename: "xa_thach_quang",
        division_type: "xã",
      },

      {
        id: 110,
        name: "Xã Như Xuân",
        codename: "xa_nhu_xuan",
        division_type: "xã",
      },

      {
        id: 111,
        name: "Xã Thượng Ninh",
        codename: "xa_thuong_ninh",
        division_type: "xã",
      },

      {
        id: 112,
        name: "Xã Xuân Bình",
        codename: "xa_xuan_binh",
        division_type: "xã",
      },

      {
        id: 113,
        name: "Xã Hóa Quỳ",
        codename: "xa_hoa_quy",
        division_type: "xã",
      },

      {
        id: 114,
        name: "Xã Thanh Phong",
        codename: "xa_thanh_phong",
        division_type: "xã",
      },

      {
        id: 115,
        name: "Xã Thanh Quân",
        codename: "xa_thanh_quan",
        division_type: "xã",
      },

      {
        id: 116,
        name: "Xã Xuân Du",
        codename: "xa_xuan_du",
        division_type: "xã",
      },

      {
        id: 117,
        name: "Xã Mậu Lâm",
        codename: "xa_mau_lam",
        division_type: "xã",
      },

      {
        id: 118,
        name: "Xã Như Thanh",
        codename: "xa_nhu_thanh",
        division_type: "xã",
      },

      {
        id: 119,
        name: "Xã Yên Thọ",
        codename: "xa_yen_tho",
        division_type: "xã",
      },

      {
        id: 120,
        name: "Xã Thanh Kỳ",
        codename: "xa_thanh_ky",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã Thường Xuân",
        codename: "xa_thuong_xuan",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Luận Thành",
        codename: "xa_luan_thanh",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Thắng Lộc",
        codename: "xa_thang_loc",
        division_type: "xã",
      },

      {
        id: 125,
        name: "Xã Xuân Chinh",
        codename: "xa_xuan_chinh",
        division_type: "xã",
      },

      {
        id: 126,
        name: "Xã Mường Lát",
        codename: "xa_muong_lat",
        division_type: "xã",
      },

      {
        id: 127,
        name: "Phường Hạc Thành",
        codename: "phuong_hac_thanh",
        division_type: "phường",
      },

      {
        id: 128,
        name: "Phường Quảng Phú",
        codename: "phuong_quang_phu",
        division_type: "phường",
      },

      {
        id: 129,
        name: "Phường Đông Quang",
        codename: "phuong_đong_quang",
        division_type: "phường",
      },

      {
        id: 130,
        name: "Phường Đông Sơn",
        codename: "phuong_đong_son",
        division_type: "phường",
      },

      {
        id: 131,
        name: "Phường Đông Tiến",
        codename: "phuong_đong_tien",
        division_type: "phường",
      },

      {
        id: 132,
        name: "Phường Hàm Rồng",
        codename: "phuong_ham_rong",
        division_type: "phường",
      },

      {
        id: 133,
        name: "Phường Nguyệt Viên",
        codename: "phuong_nguyet_vien",
        division_type: "phường",
      },

      {
        id: 134,
        name: "Phường Sầm Sơn",
        codename: "phuong_sam_son",
        division_type: "phường",
      },

      {
        id: 135,
        name: "Phường Nam Sầm Sơn",
        codename: "phuong_nam_sam_son",
        division_type: "phường",
      },

      {
        id: 136,
        name: "Phường Bỉm Sơn",
        codename: "phuong_bim_son",
        division_type: "phường",
      },

      {
        id: 137,
        name: "Phường Quang Trung",
        codename: "phuong_quang_trung",
        division_type: "phường",
      },

      {
        id: 138,
        name: "Phường Ngọc Sơn",
        codename: "phuong_ngoc_son",
        division_type: "phường",
      },

      {
        id: 139,
        name: "Phường Tân Dân",
        codename: "phuong_tan_dan",
        division_type: "phường",
      },

      {
        id: 140,
        name: "Phường Hải Lĩnh",
        codename: "phuong_hai_linh",
        division_type: "phường",
      },

      {
        id: 141,
        name: "Phường Tĩnh Gia",
        codename: "phuong_tinh_gia",
        division_type: "phường",
      },

      {
        id: 142,
        name: "Phường Đào Duy Từ",
        codename: "phuong_đao_duy_tu",
        division_type: "phường",
      },

      {
        id: 143,
        name: "Phường Hải Bình",
        codename: "phuong_hai_binh",
        division_type: "phường",
      },

      {
        id: 144,
        name: "Phường Trúc Lâm",
        codename: "phuong_truc_lam",
        division_type: "phường",
      },

      {
        id: 145,
        name: "Phường Nghi Sơn",
        codename: "phuong_nghi_son",
        division_type: "phường",
      },

      {
        id: 146,
        name: "Xã Phú Xuân",
        codename: "xa_phu_xuan",
        division_type: "xã",
      },

      {
        id: 147,
        name: "Xã Mường Chanh",
        codename: "xa_muong_chanh",
        division_type: "xã",
      },

      {
        id: 148,
        name: "Xã Quang Chiểu",
        codename: "xa_quang_chieu",
        division_type: "xã",
      },

      {
        id: 149,
        name: "Xã Tam Chung",
        codename: "xa_tam_chung",
        division_type: "xã",
      },

      {
        id: 150,
        name: "Xã Pù Nhi",
        codename: "xa_pu_nhi",
        division_type: "xã",
      },

      {
        id: 151,
        name: "Xã Nhi Sơn",
        codename: "xa_nhi_son",
        division_type: "xã",
      },

      {
        id: 152,
        name: "Xã Mường Lý",
        codename: "xa_muong_ly",
        division_type: "xã",
      },

      {
        id: 153,
        name: "Xã Trung Lý",
        codename: "xa_trung_ly",
        division_type: "xã",
      },

      {
        id: 154,
        name: "Xã Trung Sơn",
        codename: "xa_trung_son",
        division_type: "xã",
      },

      {
        id: 155,
        name: "Xã Na Mèo",
        codename: "xa_na_meo",
        division_type: "xã",
      },

      {
        id: 156,
        name: "Xã Sơn Thủy",
        codename: "xa_son_thuy",
        division_type: "xã",
      },

      {
        id: 157,
        name: "Xã Sơn Điện",
        codename: "xa_son_đien",
        division_type: "xã",
      },

      {
        id: 158,
        name: "Xã Mường Mìn",
        codename: "xa_muong_min",
        division_type: "xã",
      },

      {
        id: 159,
        name: "Xã Tam Thanh",
        codename: "xa_tam_thanh",
        division_type: "xã",
      },

      {
        id: 160,
        name: "Xã Yên Khương",
        codename: "xa_yen_khuong",
        division_type: "xã",
      },

      {
        id: 161,
        name: "Xã Yên Thắng",
        codename: "xa_yen_thang",
        division_type: "xã",
      },

      {
        id: 162,
        name: "Xã Xuân Thái",
        codename: "xa_xuan_thai",
        division_type: "xã",
      },

      {
        id: 163,
        name: "Xã Bát Mọt",
        codename: "xa_bat_mot",
        division_type: "xã",
      },

      {
        id: 164,
        name: "Xã Yên Nhân",
        codename: "xa_yen_nhan",
        division_type: "xã",
      },

      {
        id: 165,
        name: "Xã Lương Sơn",
        codename: "xa_luong_son",
        division_type: "xã",
      },

      {
        id: 166,
        name: "Xã Vạn Xuân",
        codename: "xa_van_xuan",
        division_type: "xã",
      },
    ],
  },
  {
    id: 17,
    code: "40",
    name: "Tỉnh Nghệ An",
    codename: "tinh_nghe_an",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Anh Sơn",
        codename: "xa_anh_son",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Yên Xuân",
        codename: "xa_yen_xuan",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Nhân Hòa",
        codename: "xa_nhan_hoa",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Anh Sơn Đông",
        codename: "xa_anh_son_đong",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Vĩnh Tường",
        codename: "xa_vinh_tuong",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Thành Bình Thọ",
        codename: "xa_thanh_binh_tho",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Con Cuông",
        codename: "xa_con_cuong",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Môn Sơn",
        codename: "xa_mon_son",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Mậu Thạch",
        codename: "xa_mau_thach",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Cam Phục",
        codename: "xa_cam_phuc",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Châu Khê",
        codename: "xa_chau_khe",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Diễn Châu",
        codename: "xa_dien_chau",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Đức Châu",
        codename: "xa_đuc_chau",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Quảng Châu",
        codename: "xa_quang_chau",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Hải Châu",
        codename: "xa_hai_chau",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Tân Châu",
        codename: "xa_tan_chau",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã An Châu",
        codename: "xa_an_chau",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Minh Châu",
        codename: "xa_minh_chau",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Hùng Châu",
        codename: "xa_hung_chau",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Đô Lương",
        codename: "xa_đo_luong",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Bạch Ngọc",
        codename: "xa_bach_ngoc",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Văn Hiến",
        codename: "xa_van_hien",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Bạch Hà",
        codename: "xa_bach_ha",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Thuần Trung",
        codename: "xa_thuan_trung",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Lương Sơn",
        codename: "xa_luong_son",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Hưng Nguyên",
        codename: "xa_hung_nguyen",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Yên Trung",
        codename: "xa_yen_trung",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Hưng Nguyên Nam",
        codename: "xa_hung_nguyen_nam",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Lam Thành",
        codename: "xa_lam_thanh",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Chiêu Lưu",
        codename: "xa_chieu_luu",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Hữu Kiệm",
        codename: "xa_huu_kiem",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Mường Típ",
        codename: "xa_muong_tip",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Mường Xén",
        codename: "xa_muong_xen",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Na Loi",
        codename: "xa_na_loi",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Na Ngoi",
        codename: "xa_na_ngoi",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Nậm Cắn",
        codename: "xa_nam_can",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Kim Liên",
        codename: "xa_kim_lien",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Vạn An",
        codename: "xa_van_an",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Nam Đàn",
        codename: "xa_nam_đan",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Đại Huệ",
        codename: "xa_đai_hue",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Thiên Nhẫn",
        codename: "xa_thien_nhan",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Nghĩa Đàn",
        codename: "xa_nghia_đan",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Nghĩa Thọ",
        codename: "xa_nghia_tho",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Nghĩa Lâm",
        codename: "xa_nghia_lam",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Nghĩa Mai",
        codename: "xa_nghia_mai",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Nghĩa Hưng",
        codename: "xa_nghia_hung",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Nghĩa Khánh",
        codename: "xa_nghia_khanh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Nghĩa Lộc",
        codename: "xa_nghia_loc",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Nghi Lộc",
        codename: "xa_nghi_loc",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Phúc Lộc",
        codename: "xa_phuc_loc",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Đông Lộc",
        codename: "xa_đong_loc",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Trung Lộc",
        codename: "xa_trung_loc",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Thần Lĩnh",
        codename: "xa_than_linh",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Hải Lộc",
        codename: "xa_hai_loc",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Văn Kiều",
        codename: "xa_van_kieu",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Mường Quàng",
        codename: "xa_muong_quang",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Quế Phong",
        codename: "xa_que_phong",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Thông Thụ",
        codename: "xa_thong_thu",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Tiền Phong",
        codename: "xa_tien_phong",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Tri Lễ",
        codename: "xa_tri_le",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Quỳ Châu",
        codename: "xa_quy_chau",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Châu Tiến",
        codename: "xa_chau_tien",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Hùng Chân",
        codename: "xa_hung_chan",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Quỳ Hợp",
        codename: "xa_quy_hop",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Tam Hợp",
        codename: "xa_tam_hop",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Châu Lộc",
        codename: "xa_chau_loc",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Châu Hồng",
        codename: "xa_chau_hong",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Mường Ham",
        codename: "xa_muong_ham",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Mường Chọng",
        codename: "xa_muong_chong",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Minh Hợp",
        codename: "xa_minh_hop",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Quỳnh Lưu",
        codename: "xa_quynh_luu",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Quỳnh Văn",
        codename: "xa_quynh_van",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Quỳnh Anh",
        codename: "xa_quynh_anh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Quỳnh Tam",
        codename: "xa_quynh_tam",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Quỳnh Phú",
        codename: "xa_quynh_phu",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Quỳnh Sơn",
        codename: "xa_quynh_son",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Quỳnh Thắng",
        codename: "xa_quynh_thang",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Tân Kỳ",
        codename: "xa_tan_ky",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Tân Phú",
        codename: "xa_tan_phu",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Nghĩa Đồng",
        codename: "xa_nghia_đong",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Giai Xuân",
        codename: "xa_giai_xuan",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Nghĩa Hành",
        codename: "xa_nghia_hanh",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Tiên Đồng",
        codename: "xa_tien_đong",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Đông Hiếu",
        codename: "xa_đong_hieu",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Bích Hào",
        codename: "xa_bich_hao",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Cát Ngạn",
        codename: "xa_cat_ngan",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Đại Đồng",
        codename: "xa_đai_đong",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Hạnh Lâm",
        codename: "xa_hanh_lam",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Hoa Quân",
        codename: "xa_hoa_quan",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Kim Bảng",
        codename: "xa_kim_bang",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Sơn Lâm",
        codename: "xa_son_lam",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Tam Đồng",
        codename: "xa_tam_đong",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Xuân Lâm",
        codename: "xa_xuan_lam",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Nga My",
        codename: "xa_nga_my",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Nhôn Mai",
        codename: "xa_nhon_mai",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Tam Quang",
        codename: "xa_tam_quang",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Tam Thái",
        codename: "xa_tam_thai",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Tương Dương",
        codename: "xa_tuong_duong",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Yên Hòa",
        codename: "xa_yen_hoa",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Yên Na",
        codename: "xa_yen_na",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Yên Thành",
        codename: "xa_yen_thanh",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Quan Thành",
        codename: "xa_quan_thanh",
        division_type: "xã",
      },

      {
        id: 104,
        name: "Xã Hợp Minh",
        codename: "xa_hop_minh",
        division_type: "xã",
      },

      {
        id: 105,
        name: "Xã Vân Tụ",
        codename: "xa_van_tu",
        division_type: "xã",
      },

      {
        id: 106,
        name: "Xã Vân Du",
        codename: "xa_van_du",
        division_type: "xã",
      },

      {
        id: 107,
        name: "Xã Quang Đồng",
        codename: "xa_quang_đong",
        division_type: "xã",
      },

      {
        id: 108,
        name: "Xã Giai Lạc",
        codename: "xa_giai_lac",
        division_type: "xã",
      },

      {
        id: 109,
        name: "Xã Bình Minh",
        codename: "xa_binh_minh",
        division_type: "xã",
      },

      {
        id: 110,
        name: "Xã Đông Thành",
        codename: "xa_đong_thanh",
        division_type: "xã",
      },

      {
        id: 111,
        name: "Phường Hoàng Mai",
        codename: "phuong_hoang_mai",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Quỳnh Mai",
        codename: "phuong_quynh_mai",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Phường Tân Mai",
        codename: "phuong_tan_mai",
        division_type: "phường",
      },

      {
        id: 114,
        name: "Phường Thái Hòa",
        codename: "phuong_thai_hoa",
        division_type: "phường",
      },

      {
        id: 115,
        name: "Phường Tây Hiếu",
        codename: "phuong_tay_hieu",
        division_type: "phường",
      },

      {
        id: 116,
        name: "Phường Trường Vinh",
        codename: "phuong_truong_vinh",
        division_type: "phường",
      },

      {
        id: 117,
        name: "Phường Thành Vinh",
        codename: "phuong_thanh_vinh",
        division_type: "phường",
      },

      {
        id: 118,
        name: "Phường Vinh Hưng",
        codename: "phuong_vinh_hung",
        division_type: "phường",
      },

      {
        id: 119,
        name: "Phường Vinh Phú",
        codename: "phuong_vinh_phu",
        division_type: "phường",
      },

      {
        id: 120,
        name: "Phường Vinh Lộc",
        codename: "phuong_vinh_loc",
        division_type: "phường",
      },

      {
        id: 121,
        name: "Phường Cửa Lò",
        codename: "phuong_cua_lo",
        division_type: "phường",
      },

      {
        id: 122,
        name: "Xã Keng Đu",
        codename: "xa_keng_đu",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Mỹ Lý",
        codename: "xa_my_ly",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Bắc Lý",
        codename: "xa_bac_ly",
        division_type: "xã",
      },

      {
        id: 125,
        name: "Xã Huồi Tụ",
        codename: "xa_huoi_tu",
        division_type: "xã",
      },

      {
        id: 126,
        name: "Xã Mường Lống",
        codename: "xa_muong_long",
        division_type: "xã",
      },

      {
        id: 127,
        name: "Xã Bình Chuẩn",
        codename: "xa_binh_chuan",
        division_type: "xã",
      },

      {
        id: 128,
        name: "Xã Hữu Khuông",
        codename: "xa_huu_khuong",
        division_type: "xã",
      },

      {
        id: 129,
        name: "Xã Lượng Minh",
        codename: "xa_luong_minh",
        division_type: "xã",
      },

      {
        id: 130,
        name: "Xã Châu Bình",
        codename: "xa_chau_binh",
        division_type: "xã",
      },
    ],
  },
  {
    id: 18,
    code: "42",
    name: "Tỉnh Hà Tĩnh",
    codename: "tinh_ha_tinh",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Thạch Lạc",
        codename: "xa_thach_lac",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Đồng Tiến",
        codename: "xa_đong_tien",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Thạch Khê",
        codename: "xa_thach_khe",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Cẩm Bình",
        codename: "xa_cam_binh",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Kỳ Xuân",
        codename: "xa_ky_xuan",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Kỳ Anh",
        codename: "xa_ky_anh",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Kỳ Hoa",
        codename: "xa_ky_hoa",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Kỳ Văn",
        codename: "xa_ky_van",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Kỳ Khang",
        codename: "xa_ky_khang",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Kỳ Lạc",
        codename: "xa_ky_lac",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Kỳ Thượng",
        codename: "xa_ky_thuong",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Cẩm Xuyên",
        codename: "xa_cam_xuyen",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Thiên Cầm",
        codename: "xa_thien_cam",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Cẩm Duệ",
        codename: "xa_cam_due",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Cẩm Hưng",
        codename: "xa_cam_hung",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Cẩm Lạc",
        codename: "xa_cam_lac",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Cẩm Trung",
        codename: "xa_cam_trung",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Yên Hòa",
        codename: "xa_yen_hoa",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Thạch Hà",
        codename: "xa_thach_ha",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Toàn Lưu",
        codename: "xa_toan_luu",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Việt Xuyên",
        codename: "xa_viet_xuyen",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Đông Kinh",
        codename: "xa_đong_kinh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Thạch Xuân",
        codename: "xa_thach_xuan",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Lộc Hà",
        codename: "xa_loc_ha",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Hồng Lộc",
        codename: "xa_hong_loc",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Mai Phụ",
        codename: "xa_mai_phu",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Can Lộc",
        codename: "xa_can_loc",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Tùng Lộc",
        codename: "xa_tung_loc",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Gia Hanh",
        codename: "xa_gia_hanh",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Trường Lưu",
        codename: "xa_truong_luu",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Xuân Lộc",
        codename: "xa_xuan_loc",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Đồng Lộc",
        codename: "xa_đong_loc",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Tiên Điền",
        codename: "xa_tien_đien",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Nghi Xuân",
        codename: "xa_nghi_xuan",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Cổ Đạm",
        codename: "xa_co_đam",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Đan Hải",
        codename: "xa_đan_hai",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Đức Thọ",
        codename: "xa_đuc_tho",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Đức Đồng",
        codename: "xa_đuc_đong",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Đức Quang",
        codename: "xa_đuc_quang",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Đức Thịnh",
        codename: "xa_đuc_thinh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Đức Minh",
        codename: "xa_đuc_minh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Hương Sơn",
        codename: "xa_huong_son",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Sơn Tây",
        codename: "xa_son_tay",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Tứ Mỹ",
        codename: "xa_tu_my",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Sơn Giang",
        codename: "xa_son_giang",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Sơn Tiến",
        codename: "xa_son_tien",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Sơn Hồng",
        codename: "xa_son_hong",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Kim Hoa",
        codename: "xa_kim_hoa",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Vũ Quang",
        codename: "xa_vu_quang",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Mai Hoa",
        codename: "xa_mai_hoa",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Thượng Đức",
        codename: "xa_thuong_đuc",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Hương Khê",
        codename: "xa_huong_khe",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Hương Phố",
        codename: "xa_huong_pho",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Hương Đô",
        codename: "xa_huong_đo",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Hà Linh",
        codename: "xa_ha_linh",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Hương Bình",
        codename: "xa_huong_binh",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Phúc Trạch",
        codename: "xa_phuc_trach",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Hương Xuân",
        codename: "xa_huong_xuan",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Phường Thành Sen",
        codename: "phuong_thanh_sen",
        division_type: "phường",
      },

      {
        id: 60,
        name: "Phường Trần Phú",
        codename: "phuong_tran_phu",
        division_type: "phường",
      },

      {
        id: 61,
        name: "Phường Hà Huy Tập",
        codename: "phuong_ha_huy_tap",
        division_type: "phường",
      },

      {
        id: 62,
        name: "Phường Vũng Áng",
        codename: "phuong_vung_ang",
        division_type: "phường",
      },

      {
        id: 63,
        name: "Phường Sông Trí",
        codename: "phuong_song_tri",
        division_type: "phường",
      },

      {
        id: 64,
        name: "Phường Hoành Sơn",
        codename: "phuong_hoanh_son",
        division_type: "phường",
      },

      {
        id: 65,
        name: "Phường Hải Ninh",
        codename: "phuong_hai_ninh",
        division_type: "phường",
      },

      {
        id: 66,
        name: "Phường Bắc Hồng Lĩnh",
        codename: "phuong_bac_hong_linh",
        division_type: "phường",
      },

      {
        id: 67,
        name: "Phường Nam Hồng Lĩnh",
        codename: "phuong_nam_hong_linh",
        division_type: "phường",
      },

      {
        id: 68,
        name: "Xã Sơn Kim 1",
        codename: "xa_son_kim_1",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Sơn Kim 2",
        codename: "xa_son_kim_2",
        division_type: "xã",
      },
    ],
  },
  {
    id: 19,
    code: "44",
    name: "Tỉnh Quảng Trị",
    codename: "tinh_quang_tri",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Nam Gianh",
        codename: "xa_nam_gianh",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Nam Ba Đồn",
        codename: "xa_nam_ba_đon",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Dân Hóa",
        codename: "xa_dan_hoa",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Kim Điền",
        codename: "xa_kim_đien",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Kim Phú",
        codename: "xa_kim_phu",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Minh Hóa",
        codename: "xa_minh_hoa",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Tuyên Lâm",
        codename: "xa_tuyen_lam",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Tuyên Sơn",
        codename: "xa_tuyen_son",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Đồng Lê",
        codename: "xa_đong_le",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Tuyên Phú",
        codename: "xa_tuyen_phu",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Tuyên Bình",
        codename: "xa_tuyen_binh",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Tuyên Hóa",
        codename: "xa_tuyen_hoa",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Tân Gianh",
        codename: "xa_tan_gianh",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Trung Thuần",
        codename: "xa_trung_thuan",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Quảng Trạch",
        codename: "xa_quang_trach",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Hòa Trạch",
        codename: "xa_hoa_trach",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Phú Trạch",
        codename: "xa_phu_trach",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Thượng Trạch",
        codename: "xa_thuong_trach",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Phong Nha",
        codename: "xa_phong_nha",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Bắc Trạch",
        codename: "xa_bac_trach",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Đông Trạch",
        codename: "xa_đong_trach",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Hoàn Lão",
        codename: "xa_hoan_lao",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Bố Trạch",
        codename: "xa_bo_trach",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Nam Trạch",
        codename: "xa_nam_trach",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Quảng Ninh",
        codename: "xa_quang_ninh",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Ninh Châu",
        codename: "xa_ninh_chau",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Trường Ninh",
        codename: "xa_truong_ninh",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Trường Sơn",
        codename: "xa_truong_son",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Lệ Thủy",
        codename: "xa_le_thuy",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Cam Hồng",
        codename: "xa_cam_hong",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Sen Ngư",
        codename: "xa_sen_ngu",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tân Mỹ",
        codename: "xa_tan_my",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Trường Phú",
        codename: "xa_truong_phu",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Lệ Ninh",
        codename: "xa_le_ninh",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Kim Ngân",
        codename: "xa_kim_ngan",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Vĩnh Linh",
        codename: "xa_vinh_linh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Cửa Tùng",
        codename: "xa_cua_tung",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Vĩnh Hoàng",
        codename: "xa_vinh_hoang",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Vĩnh Thủy",
        codename: "xa_vinh_thuy",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Bến Quan",
        codename: "xa_ben_quan",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Cồn Tiên",
        codename: "xa_con_tien",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Cửa Việt",
        codename: "xa_cua_viet",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Gio Linh",
        codename: "xa_gio_linh",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Bến Hải",
        codename: "xa_ben_hai",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Cam Lộ",
        codename: "xa_cam_lo",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Hiếu Giang",
        codename: "xa_hieu_giang",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã La Lay",
        codename: "xa_la_lay",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Tà Rụt",
        codename: "xa_ta_rut",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Đakrông",
        codename: "xa_đakrong",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Ba Lòng",
        codename: "xa_ba_long",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hướng Hiệp",
        codename: "xa_huong_hiep",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Hướng Lập",
        codename: "xa_huong_lap",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Hướng Phùng",
        codename: "xa_huong_phung",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Khe Sanh",
        codename: "xa_khe_sanh",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Tân Lập",
        codename: "xa_tan_lap",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Lao Bảo",
        codename: "xa_lao_bao",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Lìa",
        codename: "xa_lia",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã A Dơi",
        codename: "xa_a_doi",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Triệu Phong",
        codename: "xa_trieu_phong",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Ái Tử",
        codename: "xa_ai_tu",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Triệu Bình",
        codename: "xa_trieu_binh",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Triệu Cơ",
        codename: "xa_trieu_co",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Nam Cửa Việt",
        codename: "xa_nam_cua_viet",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Diên Sanh",
        codename: "xa_dien_sanh",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Mỹ Thủy",
        codename: "xa_my_thuy",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Hải Lăng",
        codename: "xa_hai_lang",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Nam Hải Lăng",
        codename: "xa_nam_hai_lang",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Vĩnh Định",
        codename: "xa_vinh_đinh",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Phường Đồng Hới",
        codename: "phuong_đong_hoi",
        division_type: "phường",
      },

      {
        id: 70,
        name: "Phường Đồng Thuận",
        codename: "phuong_đong_thuan",
        division_type: "phường",
      },

      {
        id: 71,
        name: "Phường Đồng Sơn",
        codename: "phuong_đong_son",
        division_type: "phường",
      },

      {
        id: 72,
        name: "Phường Ba Đồn",
        codename: "phuong_ba_đon",
        division_type: "phường",
      },

      {
        id: 73,
        name: "Phường Bắc Gianh",
        codename: "phuong_bac_gianh",
        division_type: "phường",
      },

      {
        id: 74,
        name: "Phường Đông Hà",
        codename: "phuong_đong_ha",
        division_type: "phường",
      },

      {
        id: 75,
        name: "Phường Nam Đông Hà",
        codename: "phuong_nam_đong_ha",
        division_type: "phường",
      },

      {
        id: 76,
        name: "Phường Quảng Trị",
        codename: "phuong_quang_tri",
        division_type: "phường",
      },

      {
        id: 77,
        name: "Đặc khu Cồn Cỏ",
        codename: "dac_khu_con_co",
        division_type: "đặc khu",
      },

      {
        id: 78,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },
    ],
  },
  {
    id: 20,
    code: "46",
    name: "Thành phố Huế",
    codename: "thanh_pho_hue",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường Phong Điền",
        codename: "phuong_phong_đien",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Phong Thái",
        codename: "phuong_phong_thai",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Phong Dinh",
        codename: "phuong_phong_dinh",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường Phong Phú",
        codename: "phuong_phong_phu",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Phong Quảng",
        codename: "phuong_phong_quang",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Hương Trà",
        codename: "phuong_huong_tra",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Kim Trà",
        codename: "phuong_kim_tra",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Kim Long",
        codename: "phuong_kim_long",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Hương An",
        codename: "phuong_huong_an",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Phú Xuân",
        codename: "phuong_phu_xuan",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Thuận An",
        codename: "phuong_thuan_an",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường Hóa Châu",
        codename: "phuong_hoa_chau",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường Mỹ Thượng",
        codename: "phuong_my_thuong",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Vỹ Dạ",
        codename: "phuong_vy_da",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Thuận Hóa",
        codename: "phuong_thuan_hoa",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường An Cựu",
        codename: "phuong_an_cuu",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Thủy Xuân",
        codename: "phuong_thuy_xuan",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Thanh Thủy",
        codename: "phuong_thanh_thuy",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Hương Thủy",
        codename: "phuong_huong_thuy",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Phú Bài",
        codename: "phuong_phu_bai",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Xã Đan Điền",
        codename: "xa_đan_đien",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Quảng Điền",
        codename: "xa_quang_đien",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Bình Điền",
        codename: "xa_binh_đien",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Phú Vinh",
        codename: "xa_phu_vinh",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Phú Hồ",
        codename: "xa_phu_ho",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Phú Vang",
        codename: "xa_phu_vang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Vinh Lộc",
        codename: "xa_vinh_loc",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Hưng Lộc",
        codename: "xa_hung_loc",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Lộc An",
        codename: "xa_loc_an",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Phú Lộc",
        codename: "xa_phu_loc",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Chân Mây - Lăng Cô",
        codename: "xa_chan_may_-_lang_co",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Long Quảng",
        codename: "xa_long_quang",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Nam Đông",
        codename: "xa_nam_đong",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Khe Tre",
        codename: "xa_khe_tre",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã A Lưới 1",
        codename: "xa_a_luoi_1",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã A Lưới 2",
        codename: "xa_a_luoi_2",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã A Lưới 3",
        codename: "xa_a_luoi_3",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã A Lưới 4",
        codename: "xa_a_luoi_4",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã A Lưới 5",
        codename: "xa_a_luoi_5",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Phường Dương Nỗ",
        codename: "phuong_duong_no",
        division_type: "phường",
      },
    ],
  },
  {
    id: 21,
    code: "48",
    name: "Thành phố Đà Nẵng",
    codename: "thanh_pho_đa_nang",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường‍ Hải‍ Châu",
        codename: "phuong‍_hai‍_chau",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường‍ Hòa‍ Cường",
        codename: "phuong‍_hoa‍_cuong",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường‍ Thanh‍ Khê",
        codename: "phuong‍_thanh‍_khe",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường‍ An‍ Khê",
        codename: "phuong‍_an‍_khe",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường‍ An‍ Hải",
        codename: "phuong‍_an‍_hai",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường‍ Sơn‍ Trà",
        codename: "phuong‍_son‍_tra",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường‍ Ngũ‍ Hành‍ Sơn",
        codename: "phuong‍_ngu‍_hanh‍_son",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường‍ Hòa‍ Khánh",
        codename: "phuong‍_hoa‍_khanh",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường‍ Hải‍ Vân",
        codename: "phuong‍_hai‍_van",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường‍ Liên‍ Chiểu",
        codename: "phuong‍_lien‍_chieu",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường‍ Cẩm‍ Lệ",
        codename: "phuong‍_cam‍_le",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường‍ Hòa‍ Xuân",
        codename: "phuong‍_hoa‍_xuan",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường‍ Tam‍ Kỳ",
        codename: "phuong‍_tam‍_ky",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường‍ Quảng‍ Phú",
        codename: "phuong‍_quang‍_phu",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường‍ Hương‍ Trà",
        codename: "phuong‍_huong‍_tra",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường‍ Bàn‍ Thạch",
        codename: "phuong‍_ban‍_thach",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường‍ Điện‍ Bàn",
        codename: "phuong‍_đien‍_ban",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường‍ Điện‍ Bàn‍ Đông",
        codename: "phuong‍_đien‍_ban‍_đong",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường‍ An‍ Thắng",
        codename: "phuong‍_an‍_thang",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường‍ Điện‍ Bàn‍ Bắc",
        codename: "phuong‍_đien‍_ban‍_bac",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Phường‍ Hội‍ An",
        codename: "phuong‍_hoi‍_an",
        division_type: "phường",
      },

      {
        id: 22,
        name: "Phường‍ Hội‍ An‍ Đông",
        codename: "phuong‍_hoi‍_an‍_đong",
        division_type: "phường",
      },

      {
        id: 23,
        name: "Phường‍ Hội‍ An‍ Tây",
        codename: "phuong‍_hoi‍_an‍_tay",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Xã‍ Hòa‍ Vang",
        codename: "xa‍_hoa‍_vang",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã‍ Hòa‍ Tiến",
        codename: "xa‍_hoa‍_tien",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã‍ Bà‍ Nà",
        codename: "xa‍_ba‍_na",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã‍ Núi‍ Thành",
        codename: "xa‍_nui‍_thanh",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã‍ Tam‍ Mỹ",
        codename: "xa‍_tam‍_my",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã‍ Tam‍ Anh",
        codename: "xa‍_tam‍_anh",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã‍ Đức‍ Phú",
        codename: "xa‍_đuc‍_phu",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã‍ Tam‍ Xuân",
        codename: "xa‍_tam‍_xuan",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã‍ Tây‍ Hồ",
        codename: "xa‍_tay‍_ho",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã‍ Chiên‍ Đàn",
        codename: "xa‍_chien‍_đan",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã‍ Phú‍ Ninh",
        codename: "xa‍_phu‍_ninh",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã‍ Lãnh‍ Ngọc",
        codename: "xa‍_lanh‍_ngoc",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã‍ Tiên‍ Phước",
        codename: "xa‍_tien‍_phuoc",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã‍ Thạnh‍ Bình",
        codename: "xa‍_thanh‍_binh",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã‍ Sơn‍ Cẩm‍ Hà",
        codename: "xa‍_son‍_cam‍_ha",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã‍ Trà‍ Liên",
        codename: "xa‍_tra‍_lien",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã‍ Trà‍ Giáp",
        codename: "xa‍_tra‍_giap",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã‍ Trà‍ Tân",
        codename: "xa‍_tra‍_tan",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã‍ Trà‍ Đốc",
        codename: "xa‍_tra‍_đoc",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã‍ Trà‍ My",
        codename: "xa‍_tra‍_my",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã‍ Nam‍ Trà‍ My",
        codename: "xa‍_nam‍_tra‍_my",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã‍ Trà‍ Tập",
        codename: "xa‍_tra‍_tap",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã‍ Trà‍ Vân",
        codename: "xa‍_tra‍_van",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã‍ Trà‍ Linh",
        codename: "xa‍_tra‍_linh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã‍ Trà‍ Leng",
        codename: "xa‍_tra‍_leng",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã‍ Thăng‍ Bình",
        codename: "xa‍_thang‍_binh",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã‍ Thăng‍ An",
        codename: "xa‍_thang‍_an",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã‍ Thăng‍ Trường",
        codename: "xa‍_thang‍_truong",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã‍ Thăng‍ Điền",
        codename: "xa‍_thang‍_đien",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã‍ Thăng‍ Phú",
        codename: "xa‍_thang‍_phu",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã‍ Đồng‍ Dương",
        codename: "xa‍_đong‍_duong",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã‍ Quế‍ Sơn‍ Trung",
        codename: "xa‍_que‍_son‍_trung",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã‍ Quế‍ Sơn",
        codename: "xa‍_que‍_son",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã‍ Xuân‍ Phú",
        codename: "xa‍_xuan‍_phu",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã‍ Nông‍ Sơn",
        codename: "xa‍_nong‍_son",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã‍ Quế‍ Phước",
        codename: "xa‍_que‍_phuoc",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã‍ Duy‍ Nghĩa",
        codename: "xa‍_duy‍_nghia",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã‍ Nam‍ Phước",
        codename: "xa‍_nam‍_phuoc",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã‍ Duy‍ Xuyên",
        codename: "xa‍_duy‍_xuyen",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã‍ Thu‍ Bồn",
        codename: "xa‍_thu‍_bon",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã‍ Điện‍ Bàn‍ Tây",
        codename: "xa‍_đien‍_ban‍_tay",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã‍ Gò‍ Nổi",
        codename: "xa‍_go‍_noi",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã‍ Đại‍ Lộc",
        codename: "xa‍_đai‍_loc",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã‍ Hà‍ Nha",
        codename: "xa‍_ha‍_nha",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã‍ Thượng‍ Đức",
        codename: "xa‍_thuong‍_đuc",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã‍ Vu‍ Gia",
        codename: "xa‍_vu‍_gia",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã‍ Phú‍ Thuận",
        codename: "xa‍_phu‍_thuan",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã‍ Thạnh‍ Mỹ",
        codename: "xa‍_thanh‍_my",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã‍ Bến‍ Giằng",
        codename: "xa‍_ben‍_giang",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã‍ Nam‍ Giang",
        codename: "xa‍_nam‍_giang",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã‍ Đắc‍ Pring",
        codename: "xa‍_đac‍_pring",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã‍ La‍ Dêê",
        codename: "xa‍_la‍_dee",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã‍ La‍ Êê",
        codename: "xa‍_la‍_ee",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã‍ Sông‍ Vàng",
        codename: "xa‍_song‍_vang",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã‍ Sông‍ Kôn",
        codename: "xa‍_song‍_kon",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã‍ Đông‍ Giang",
        codename: "xa‍_đong‍_giang",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã‍ Bến‍ Hiên",
        codename: "xa‍_ben‍_hien",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã‍ Avương",
        codename: "xa‍_avuong",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã‍ Tây‍ Giang",
        codename: "xa‍_tay‍_giang",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã‍ Hùng‍ Sơn",
        codename: "xa‍_hung‍_son",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã‍ Hiệp‍ Đức",
        codename: "xa‍_hiep‍_đuc",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã‍ Việt‍ An",
        codename: "xa‍_viet‍_an",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã‍ Phước‍ Trà",
        codename: "xa‍_phuoc‍_tra",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã‍ Khâm‍ Đức",
        codename: "xa‍_kham‍_đuc",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã‍ Phước‍ Năng",
        codename: "xa‍_phuoc‍_nang",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã‍ Phước‍ Chánh",
        codename: "xa‍_phuoc‍_chanh",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã‍ Phước‍ Thành",
        codename: "xa‍_phuoc‍_thanh",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã‍ Phước‍ Hiệp",
        codename: "xa‍_phuoc‍_hiep",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Đặc‍ khu‍ Hoàng‍ Sa",
        codename: "đac‍_khu‍_hoang‍_sa",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Tam Hải",
        codename: "xa_tam_hai",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Tân Hiệp",
        codename: "xa_tan_hiep",
        division_type: "xã",
      },
    ],
  },
  {
    id: 22,
    code: "51",
    name: "Tỉnh Quảng Ngãi",
    codename: "tinh_quang_ngai",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Tịnh Khê",
        codename: "xa_tinh_khe",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã An Phú",
        codename: "xa_an_phu",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Nguyễn Nghiêm",
        codename: "xa_nguyen_nghiem",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Khánh Cường",
        codename: "xa_khanh_cuong",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Bình Minh",
        codename: "xa_binh_minh",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Bình Chương",
        codename: "xa_binh_chuong",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Bình Sơn",
        codename: "xa_binh_son",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Vạn Tường",
        codename: "xa_van_tuong",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Đông Sơn",
        codename: "xa_đong_son",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Trường Giang",
        codename: "xa_truong_giang",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Ba Gia",
        codename: "xa_ba_gia",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Sơn Tịnh",
        codename: "xa_son_tinh",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Thọ Phong",
        codename: "xa_tho_phong",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Tư Nghĩa",
        codename: "xa_tu_nghia",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Vệ Giang",
        codename: "xa_ve_giang",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Nghĩa Giang",
        codename: "xa_nghia_giang",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Trà Giang",
        codename: "xa_tra_giang",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Nghĩa Hành",
        codename: "xa_nghia_hanh",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Đình Cương",
        codename: "xa_đinh_cuong",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Thiện Tín",
        codename: "xa_thien_tin",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Phước Giang",
        codename: "xa_phuoc_giang",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Long Phụng",
        codename: "xa_long_phung",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Mỏ Cày",
        codename: "xa_mo_cay",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Mộ Đức",
        codename: "xa_mo_đuc",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Lân Phong",
        codename: "xa_lan_phong",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Trà Bồng",
        codename: "xa_tra_bong",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Đông Trà Bồng",
        codename: "xa_đong_tra_bong",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Tây Trà",
        codename: "xa_tay_tra",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Thanh Bồng",
        codename: "xa_thanh_bong",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Cà Đam",
        codename: "xa_ca_đam",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Tây Trà Bồng",
        codename: "xa_tay_tra_bong",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Sơn Hạ",
        codename: "xa_son_ha",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Sơn Linh",
        codename: "xa_son_linh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Sơn Hà",
        codename: "xa_son_ha",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Sơn Thủy",
        codename: "xa_son_thuy",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Sơn Kỳ",
        codename: "xa_son_ky",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Sơn Tây",
        codename: "xa_son_tay",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Sơn Tây Thượng",
        codename: "xa_son_tay_thuong",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Sơn Tây Hạ",
        codename: "xa_son_tay_ha",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Minh Long",
        codename: "xa_minh_long",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Sơn Mai",
        codename: "xa_son_mai",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Ba Vì",
        codename: "xa_ba_vi",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Ba Tô",
        codename: "xa_ba_to",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Ba Dinh",
        codename: "xa_ba_dinh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Ba Tơ",
        codename: "xa_ba_to",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Ba Vinh",
        codename: "xa_ba_vinh",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Ba Động",
        codename: "xa_ba_đong",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Đặng Thùy Trâm",
        codename: "xa_đang_thuy_tram",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Ngọk Bay",
        codename: "xa_ngok_bay",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Ia Chim",
        codename: "xa_ia_chim",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Đăk Rơ Wa",
        codename: "xa_đak_ro_wa",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Đăk Pxi",
        codename: "xa_đak_pxi",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Đăk Mar",
        codename: "xa_đak_mar",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Đăk Ui",
        codename: "xa_đak_ui",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Ngọk Réo",
        codename: "xa_ngok_reo",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Đăk Hà",
        codename: "xa_đak_ha",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Ngọk Tụ",
        codename: "xa_ngok_tu",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Đăk Tô",
        codename: "xa_đak_to",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Kon Đào",
        codename: "xa_kon_đao",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Đăk Sao",
        codename: "xa_đak_sao",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Đăk Tờ Kan",
        codename: "xa_đak_to_kan",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Tu Mơ Rông",
        codename: "xa_tu_mo_rong",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Măng Ri",
        codename: "xa_mang_ri",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Bờ Y",
        codename: "xa_bo_y",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Sa Loong",
        codename: "xa_sa_loong",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Dục Nông",
        codename: "xa_duc_nong",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Xốp",
        codename: "xa_xop",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Ngọc Linh",
        codename: "xa_ngoc_linh",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Đăk Plô",
        codename: "xa_đak_plo",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Đăk Pék",
        codename: "xa_đak_pek",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Đăk Môn",
        codename: "xa_đak_mon",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Sa Thầy",
        codename: "xa_sa_thay",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Sa Bình",
        codename: "xa_sa_binh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Ya Ly",
        codename: "xa_ya_ly",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Ia Tơi",
        codename: "xa_ia_toi",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Đăk Kôi",
        codename: "xa_đak_koi",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Kon Braih",
        codename: "xa_kon_braih",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Đăk Rve",
        codename: "xa_đak_rve",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Măng Đen",
        codename: "xa_mang_đen",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Măng Bút",
        codename: "xa_mang_but",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Kon Plông",
        codename: "xa_kon_plong",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Phường Trương Quang Trọng",
        codename: "phuong_truong_quang_trong",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Cẩm Thành",
        codename: "phuong_cam_thanh",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Nghĩa Lộ",
        codename: "phuong_nghia_lo",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Trà Câu",
        codename: "phuong_tra_cau",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Đức Phổ",
        codename: "phuong_đuc_pho",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Sa Huỳnh",
        codename: "phuong_sa_huynh",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Kon Tum",
        codename: "phuong_kon_tum",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Đăk Cấm",
        codename: "phuong_đak_cam",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Đăk Bla",
        codename: "phuong_đak_bla",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Đặc khu Lý Sơn",
        codename: "dac_khu_ly_son",
        division_type: "đặc khu",
      },

      {
        id: 92,
        name: "Xã Đăk Long",
        codename: "xa_đak_long",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Ba Xa",
        codename: "xa_ba_xa",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Rờ Kơi",
        codename: "xa_ro_koi",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Mô Rai",
        codename: "xa_mo_rai",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Ia Đal",
        codename: "xa_ia_đal",
        division_type: "xã",
      },
    ],
  },
  {
    id: 23,
    code: "52",
    name: "Tỉnh Gia Lai",
    codename: "tinh_gia_lai",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã An Nhơn Tây",
        codename: "xa_an_nhon_tay",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Phù Cát",
        codename: "xa_phu_cat",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Xuân An",
        codename: "xa_xuan_an",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Ngô Mây",
        codename: "xa_ngo_may",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Cát Tiến",
        codename: "xa_cat_tien",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Đề Gi",
        codename: "xa_đe_gi",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Hòa Hội",
        codename: "xa_hoa_hoi",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Hội Sơn",
        codename: "xa_hoi_son",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Phù Mỹ",
        codename: "xa_phu_my",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã An Lương",
        codename: "xa_an_luong",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Bình Dương",
        codename: "xa_binh_duong",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Phù Mỹ Đông",
        codename: "xa_phu_my_đong",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Phù Mỹ Tây",
        codename: "xa_phu_my_tay",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Phù Mỹ Nam",
        codename: "xa_phu_my_nam",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Phù Mỹ Bắc",
        codename: "xa_phu_my_bac",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Tuy Phước",
        codename: "xa_tuy_phuoc",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Tuy Phước Đông",
        codename: "xa_tuy_phuoc_đong",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Tuy Phước Tây",
        codename: "xa_tuy_phuoc_tay",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Tuy Phước Bắc",
        codename: "xa_tuy_phuoc_bac",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Tây Sơn",
        codename: "xa_tay_son",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Bình Khê",
        codename: "xa_binh_khe",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Bình Phú",
        codename: "xa_binh_phu",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Bình Hiệp",
        codename: "xa_binh_hiep",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Bình An",
        codename: "xa_binh_an",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Hoài Ân",
        codename: "xa_hoai_an",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Ân Tường",
        codename: "xa_an_tuong",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Kim Sơn",
        codename: "xa_kim_son",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Vạn Đức",
        codename: "xa_van_đuc",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Ân Hảo",
        codename: "xa_an_hao",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Vân Canh",
        codename: "xa_van_canh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Canh Vinh",
        codename: "xa_canh_vinh",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Canh Liên",
        codename: "xa_canh_lien",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Vĩnh Thạnh",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Vĩnh Thịnh",
        codename: "xa_vinh_thinh",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Vĩnh Quang",
        codename: "xa_vinh_quang",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Vĩnh Sơn",
        codename: "xa_vinh_son",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã An Hòa",
        codename: "xa_an_hoa",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã An Lão",
        codename: "xa_an_lao",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã An Vinh",
        codename: "xa_an_vinh",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã An Toàn",
        codename: "xa_an_toan",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Biển Hồ",
        codename: "xa_bien_ho",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Gào",
        codename: "xa_gao",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Ia Ly",
        codename: "xa_ia_ly",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Chư Păh",
        codename: "xa_chu_pah",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Ia Khươl",
        codename: "xa_ia_khuol",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Ia Phí",
        codename: "xa_ia_phi",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Chư Prông",
        codename: "xa_chu_prong",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Bàu Cạn",
        codename: "xa_bau_can",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Ia Boòng",
        codename: "xa_ia_boong",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Ia Lâu",
        codename: "xa_ia_lau",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Ia Pia",
        codename: "xa_ia_pia",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Ia Tôr",
        codename: "xa_ia_tor",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Chư Sê",
        codename: "xa_chu_se",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Bờ Ngoong",
        codename: "xa_bo_ngoong",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Ia Ko",
        codename: "xa_ia_ko",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Al Bá",
        codename: "xa_al_ba",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Chư Pưh",
        codename: "xa_chu_puh",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Ia Le",
        codename: "xa_ia_le",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Ia Hrú",
        codename: "xa_ia_hru",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Cửu An",
        codename: "xa_cuu_an",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Đak Pơ",
        codename: "xa_đak_po",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Ya Hội",
        codename: "xa_ya_hoi",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Kbang",
        codename: "xa_kbang",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Kông Bơ La",
        codename: "xa_kong_bo_la",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Tơ Tung",
        codename: "xa_to_tung",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Sơn Lang",
        codename: "xa_son_lang",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Đak Rong",
        codename: "xa_đak_rong",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Kông Chro",
        codename: "xa_kong_chro",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Ya Ma",
        codename: "xa_ya_ma",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Chư Krey",
        codename: "xa_chu_krey",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã SRó",
        codename: "xa_sro",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Đăk Song",
        codename: "xa_đak_song",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Chơ Long",
        codename: "xa_cho_long",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Ia Rbol",
        codename: "xa_ia_rbol",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Ia Sao",
        codename: "xa_ia_sao",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Phú Thiện",
        codename: "xa_phu_thien",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Chư A Thai",
        codename: "xa_chu_a_thai",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Ia Hiao",
        codename: "xa_ia_hiao",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Pờ Tó",
        codename: "xa_po_to",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Ia Pa",
        codename: "xa_ia_pa",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Ia Tul",
        codename: "xa_ia_tul",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Phú Túc",
        codename: "xa_phu_tuc",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Ia Dreh",
        codename: "xa_ia_dreh",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Ia Rsai",
        codename: "xa_ia_rsai",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Uar",
        codename: "xa_uar",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Đak Đoa",
        codename: "xa_đak_đoa",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Kon Gang",
        codename: "xa_kon_gang",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Ia Băng",
        codename: "xa_ia_bang",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã KDang",
        codename: "xa_kdang",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Đak Sơmei",
        codename: "xa_đak_somei",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Mang Yang",
        codename: "xa_mang_yang",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Lơ Pang",
        codename: "xa_lo_pang",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Kon Chiêng",
        codename: "xa_kon_chieng",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Hra",
        codename: "xa_hra",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Ayun",
        codename: "xa_ayun",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Ia Grai",
        codename: "xa_ia_grai",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Ia Krái",
        codename: "xa_ia_krai",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Ia Hrung",
        codename: "xa_ia_hrung",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Đức Cơ",
        codename: "xa_đuc_co",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Ia Dơk",
        codename: "xa_ia_dok",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Ia Krêl",
        codename: "xa_ia_krel",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Phường Quy Nhơn",
        codename: "phuong_quy_nhon",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Quy Nhơn Đông",
        codename: "phuong_quy_nhon_đong",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường Quy Nhơn Tây",
        codename: "phuong_quy_nhon_tay",
        division_type: "phường",
      },

      {
        id: 105,
        name: "Phường Quy Nhơn Nam",
        codename: "phuong_quy_nhon_nam",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường Quy Nhơn Bắc",
        codename: "phuong_quy_nhon_bac",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường Bình Định",
        codename: "phuong_binh_đinh",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường An Nhơn",
        codename: "phuong_an_nhon",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường An Nhơn Đông",
        codename: "phuong_an_nhon_đong",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường An Nhơn Nam",
        codename: "phuong_an_nhon_nam",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường An Nhơn Bắc",
        codename: "phuong_an_nhon_bac",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Bồng Sơn",
        codename: "phuong_bong_son",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Phường Hoài Nhơn",
        codename: "phuong_hoai_nhon",
        division_type: "phường",
      },

      {
        id: 114,
        name: "Phường Tam Quan",
        codename: "phuong_tam_quan",
        division_type: "phường",
      },

      {
        id: 115,
        name: "Phường Hoài Nhơn Đông",
        codename: "phuong_hoai_nhon_đong",
        division_type: "phường",
      },

      {
        id: 116,
        name: "Phường Hoài Nhơn Tây",
        codename: "phuong_hoai_nhon_tay",
        division_type: "phường",
      },

      {
        id: 117,
        name: "Phường Hoài Nhơn Nam",
        codename: "phuong_hoai_nhon_nam",
        division_type: "phường",
      },

      {
        id: 118,
        name: "Phường Hoài Nhơn Bắc",
        codename: "phuong_hoai_nhon_bac",
        division_type: "phường",
      },

      {
        id: 119,
        name: "Phường Pleiku",
        codename: "phuong_pleiku",
        division_type: "phường",
      },

      {
        id: 120,
        name: "Phường Hội Phú",
        codename: "phuong_hoi_phu",
        division_type: "phường",
      },

      {
        id: 121,
        name: "Phường Thống Nhất",
        codename: "phuong_thong_nhat",
        division_type: "phường",
      },

      {
        id: 122,
        name: "Phường Diên Hồng",
        codename: "phuong_dien_hong",
        division_type: "phường",
      },

      {
        id: 123,
        name: "Phường An Phú",
        codename: "phuong_an_phu",
        division_type: "phường",
      },

      {
        id: 124,
        name: "Phường An Khê",
        codename: "phuong_an_khe",
        division_type: "phường",
      },

      {
        id: 125,
        name: "Phường An Bình",
        codename: "phuong_an_binh",
        division_type: "phường",
      },

      {
        id: 126,
        name: "Phường Ayun Pa",
        codename: "phuong_ayun_pa",
        division_type: "phường",
      },

      {
        id: 127,
        name: "Xã Ia O",
        codename: "xa_ia_o",
        division_type: "xã",
      },

      {
        id: 128,
        name: "Xã Nhơn Châu",
        codename: "xa_nhon_chau",
        division_type: "xã",
      },

      {
        id: 129,
        name: "Xã Ia Púch",
        codename: "xa_ia_puch",
        division_type: "xã",
      },

      {
        id: 130,
        name: "Xã Ia Mơ",
        codename: "xa_ia_mo",
        division_type: "xã",
      },

      {
        id: 131,
        name: "Xã Ia Pnôn",
        codename: "xa_ia_pnon",
        division_type: "xã",
      },

      {
        id: 132,
        name: "Xã Ia Nan",
        codename: "xa_ia_nan",
        division_type: "xã",
      },

      {
        id: 133,
        name: "Xã Ia Dom",
        codename: "xa_ia_dom",
        division_type: "xã",
      },

      {
        id: 134,
        name: "Xã Ia Chia",
        codename: "xa_ia_chia",
        division_type: "xã",
      },

      {
        id: 135,
        name: "Xã Krong",
        codename: "xa_krong",
        division_type: "xã",
      },
    ],
  },
  {
    id: 24,
    code: "56",
    name: "Tỉnh Khánh Hòa",
    codename: "tinh_khanh_hoa",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Nam Cam Ranh",
        codename: "xa_nam_cam_ranh",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Bắc Ninh Hòa",
        codename: "xa_bac_ninh_hoa",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tân Định",
        codename: "xa_tan_đinh",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Nam Ninh Hòa",
        codename: "xa_nam_ninh_hoa",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Tây Ninh Hòa",
        codename: "xa_tay_ninh_hoa",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Hòa Trí",
        codename: "xa_hoa_tri",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Đại Lãnh",
        codename: "xa_đai_lanh",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Tu Bông",
        codename: "xa_tu_bong",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Vạn Thắng",
        codename: "xa_van_thang",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Vạn Ninh",
        codename: "xa_van_ninh",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Vạn Hưng",
        codename: "xa_van_hung",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Diên Khánh",
        codename: "xa_dien_khanh",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Diên Lạc",
        codename: "xa_dien_lac",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Diên Điền",
        codename: "xa_dien_đien",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Diên Lâm",
        codename: "xa_dien_lam",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Diên Thọ",
        codename: "xa_dien_tho",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Suối Hiệp",
        codename: "xa_suoi_hiep",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Cam Lâm",
        codename: "xa_cam_lam",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Suối Dầu",
        codename: "xa_suoi_dau",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Cam Hiệp",
        codename: "xa_cam_hiep",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Cam An",
        codename: "xa_cam_an",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Bắc Khánh Vĩnh",
        codename: "xa_bac_khanh_vinh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Trung Khánh Vĩnh",
        codename: "xa_trung_khanh_vinh",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Tây Khánh Vĩnh",
        codename: "xa_tay_khanh_vinh",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Nam Khánh Vĩnh",
        codename: "xa_nam_khanh_vinh",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Khánh Vĩnh",
        codename: "xa_khanh_vinh",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Khánh Sơn",
        codename: "xa_khanh_son",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Tây Khánh Sơn",
        codename: "xa_tay_khanh_son",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Đông Khánh Sơn",
        codename: "xa_đong_khanh_son",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Ninh Phước",
        codename: "xa_ninh_phuoc",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Phước Hữu",
        codename: "xa_phuoc_huu",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Phước Hậu",
        codename: "xa_phuoc_hau",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Thuận Nam",
        codename: "xa_thuan_nam",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Cà Ná",
        codename: "xa_ca_na",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Phước Hà",
        codename: "xa_phuoc_ha",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Phước Dinh",
        codename: "xa_phuoc_dinh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Ninh Hải",
        codename: "xa_ninh_hai",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Xuân Hải",
        codename: "xa_xuan_hai",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Vĩnh Hải",
        codename: "xa_vinh_hai",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Thuận Bắc",
        codename: "xa_thuan_bac",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Công Hải",
        codename: "xa_cong_hai",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Ninh Sơn",
        codename: "xa_ninh_son",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Lâm Sơn",
        codename: "xa_lam_son",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Anh Dũng",
        codename: "xa_anh_dung",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Mỹ Sơn",
        codename: "xa_my_son",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Bác Ái Đông",
        codename: "xa_bac_ai_đong",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Bác Ái",
        codename: "xa_bac_ai",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Bác Ái Tây",
        codename: "xa_bac_ai_tay",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Phường Nha Trang",
        codename: "phuong_nha_trang",
        division_type: "phường",
      },

      {
        id: 50,
        name: "Phường Bắc Nha Trang",
        codename: "phuong_bac_nha_trang",
        division_type: "phường",
      },

      {
        id: 51,
        name: "Phường Tây Nha Trang",
        codename: "phuong_tay_nha_trang",
        division_type: "phường",
      },

      {
        id: 52,
        name: "Phường Nam Nha Trang",
        codename: "phuong_nam_nha_trang",
        division_type: "phường",
      },

      {
        id: 53,
        name: "Phường Bắc Cam Ranh",
        codename: "phuong_bac_cam_ranh",
        division_type: "phường",
      },

      {
        id: 54,
        name: "Phường Cam Ranh",
        codename: "phuong_cam_ranh",
        division_type: "phường",
      },

      {
        id: 55,
        name: "Phường Cam Linh",
        codename: "phuong_cam_linh",
        division_type: "phường",
      },

      {
        id: 56,
        name: "Phường Ba Ngòi",
        codename: "phuong_ba_ngoi",
        division_type: "phường",
      },

      {
        id: 57,
        name: "Phường Ninh Hòa",
        codename: "phuong_ninh_hoa",
        division_type: "phường",
      },

      {
        id: 58,
        name: "Phường Đông Ninh Hòa",
        codename: "phuong_đong_ninh_hoa",
        division_type: "phường",
      },

      {
        id: 59,
        name: "Phường Hòa Thắng",
        codename: "phuong_hoa_thang",
        division_type: "phường",
      },

      {
        id: 60,
        name: "Phường Phan Rang",
        codename: "phuong_phan_rang",
        division_type: "phường",
      },

      {
        id: 61,
        name: "Phường Đông Hải",
        codename: "phuong_đong_hai",
        division_type: "phường",
      },

      {
        id: 62,
        name: "Phường Ninh Chử",
        codename: "phuong_ninh_chu",
        division_type: "phường",
      },

      {
        id: 63,
        name: "Phường Bảo An",
        codename: "phuong_bao_an",
        division_type: "phường",
      },

      {
        id: 64,
        name: "Phường Đô Vinh",
        codename: "phuong_đo_vinh",
        division_type: "phường",
      },

      {
        id: 65,
        name: "Đặc khu Trường Sa",
        codename: "dac_khu_truong_sa",
        division_type: "đặc khu",
      },
    ],
  },
  {
    id: 25,
    code: "66",
    name: "Tỉnh Đắk Lắk",
    codename: "tinh_đak_lak",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Hòa Phú",
        codename: "xa_hoa_phu",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Ea Drông",
        codename: "xa_ea_drong",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Ea Súp",
        codename: "xa_ea_sup",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Ea Rốk",
        codename: "xa_ea_rok",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Ea Bung",
        codename: "xa_ea_bung",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Ea Wer",
        codename: "xa_ea_wer",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Ea Nuôl",
        codename: "xa_ea_nuol",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Ea Kiết",
        codename: "xa_ea_kiet",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Ea M’Droh",
        codename: "xa_ea_m’droh",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Quảng Phú",
        codename: "xa_quang_phu",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Cuôr Đăng",
        codename: "xa_cuor_đang",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Cư M’gar",
        codename: "xa_cu_m’gar",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Ea Tul",
        codename: "xa_ea_tul",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Pơng Drang",
        codename: "xa_pong_drang",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Krông Búk",
        codename: "xa_krong_buk",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Cư Pơng",
        codename: "xa_cu_pong",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Ea Khăl",
        codename: "xa_ea_khal",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Ea Drăng",
        codename: "xa_ea_drang",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Ea Wy",
        codename: "xa_ea_wy",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Ea Hiao",
        codename: "xa_ea_hiao",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Krông Năng",
        codename: "xa_krong_nang",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Dliê Ya",
        codename: "xa_dlie_ya",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Tam Giang",
        codename: "xa_tam_giang",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Phú Xuân",
        codename: "xa_phu_xuan",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Krông Pắc",
        codename: "xa_krong_pac",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Ea Knuếc",
        codename: "xa_ea_knuec",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Ea Phê",
        codename: "xa_ea_phe",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Ea Kly",
        codename: "xa_ea_kly",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Ea Kar",
        codename: "xa_ea_kar",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Ea Ô",
        codename: "xa_ea_o",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Ea Knốp",
        codename: "xa_ea_knop",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Cư Yang",
        codename: "xa_cu_yang",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Ea Păl",
        codename: "xa_ea_pal",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã M’Drắk",
        codename: "xa_m’drak",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Ea Riêng",
        codename: "xa_ea_rieng",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Cư M’ta",
        codename: "xa_cu_m’ta",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Krông Á",
        codename: "xa_krong_a",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Cư Prao",
        codename: "xa_cu_prao",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Hòa Sơn",
        codename: "xa_hoa_son",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Dang Kang",
        codename: "xa_dang_kang",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Krông Bông",
        codename: "xa_krong_bong",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Yang Mao",
        codename: "xa_yang_mao",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Cư Pui",
        codename: "xa_cu_pui",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Liên Sơn Lắk",
        codename: "xa_lien_son_lak",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Đắk Liêng",
        codename: "xa_đak_lieng",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Nam Ka",
        codename: "xa_nam_ka",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Đắk Phơi",
        codename: "xa_đak_phoi",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Ea Ning",
        codename: "xa_ea_ning",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Dray Bhăng",
        codename: "xa_dray_bhang",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Ea Ktur",
        codename: "xa_ea_ktur",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Krông Ana",
        codename: "xa_krong_ana",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Dur Kmăl",
        codename: "xa_dur_kmal",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Ea Na",
        codename: "xa_ea_na",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Xuân Thọ",
        codename: "xa_xuan_tho",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Xuân Cảnh",
        codename: "xa_xuan_canh",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Xuân Lộc",
        codename: "xa_xuan_loc",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Hòa Xuân",
        codename: "xa_hoa_xuan",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Tuy An Bắc",
        codename: "xa_tuy_an_bac",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Tuy An Đông",
        codename: "xa_tuy_an_đong",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Ô Loan",
        codename: "xa_o_loan",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Tuy An Nam",
        codename: "xa_tuy_an_nam",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Tuy An Tây",
        codename: "xa_tuy_an_tay",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Phú Hòa 1",
        codename: "xa_phu_hoa_1",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Phú Hòa 2",
        codename: "xa_phu_hoa_2",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Tây Hòa",
        codename: "xa_tay_hoa",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Hòa Thịnh",
        codename: "xa_hoa_thinh",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Hòa Mỹ",
        codename: "xa_hoa_my",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Sơn Thành",
        codename: "xa_son_thanh",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Sơn Hòa",
        codename: "xa_son_hoa",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Vân Hòa",
        codename: "xa_van_hoa",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Tây Sơn",
        codename: "xa_tay_son",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Suối Trai",
        codename: "xa_suoi_trai",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Ea Ly",
        codename: "xa_ea_ly",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Ea Bá",
        codename: "xa_ea_ba",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Đức Bình",
        codename: "xa_đuc_binh",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Sông Hinh",
        codename: "xa_song_hinh",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Xuân Lãnh",
        codename: "xa_xuan_lanh",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Phú Mỡ",
        codename: "xa_phu_mo",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Xuân Phước",
        codename: "xa_xuan_phuoc",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Đồng Xuân",
        codename: "xa_đong_xuan",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Phường Buôn Ma Thuột",
        codename: "phuong_buon_ma_thuot",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Tân An",
        codename: "phuong_tan_an",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Tân Lập",
        codename: "phuong_tan_lap",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Thành Nhất",
        codename: "phuong_thanh_nhat",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Ea Kao",
        codename: "phuong_ea_kao",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Buôn Hồ",
        codename: "phuong_buon_ho",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Cư Bao",
        codename: "phuong_cu_bao",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Phú Yên",
        codename: "phuong_phu_yen",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Tuy Hòa",
        codename: "phuong_tuy_hoa",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Bình Kiến",
        codename: "phuong_binh_kien",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường Xuân Đài",
        codename: "phuong_xuan_đai",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Sông Cầu",
        codename: "phuong_song_cau",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Phường Đông Hòa",
        codename: "phuong_đong_hoa",
        division_type: "phường",
      },

      {
        id: 95,
        name: "Phường Hòa Hiệp",
        codename: "phuong_hoa_hiep",
        division_type: "phường",
      },

      {
        id: 96,
        name: "Xã Buôn Đôn",
        codename: "xa_buon_đon",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Ea H’Leo",
        codename: "xa_ea_h’leo",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Ea Trang",
        codename: "xa_ea_trang",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Ia Lốp",
        codename: "xa_ia_lop",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Ia Rvê",
        codename: "xa_ia_rve",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Krông Nô",
        codename: "xa_krong_no",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Vụ Bổn",
        codename: "xa_vu_bon",
        division_type: "xã",
      },
    ],
  },
  {
    id: 26,
    code: "68",
    name: "Tỉnh Lâm Đồng",
    codename: "tinh_lam_đong",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Lạc Dương",
        codename: "xa_lac_duong",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Đơn Dương",
        codename: "xa_đon_duong",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Ka Đô",
        codename: "xa_ka_đo",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Quảng Lập",
        codename: "xa_quang_lap",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã D’Ran",
        codename: "xa_d’ran",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Hiệp Thạnh",
        codename: "xa_hiep_thanh",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Đức Trọng",
        codename: "xa_đuc_trong",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Tân Hội",
        codename: "xa_tan_hoi",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Tà Hine",
        codename: "xa_ta_hine",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Tà Năng",
        codename: "xa_ta_nang",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Đinh Văn Lâm Hà",
        codename: "xa_đinh_van_lam_ha",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Phú Sơn Lâm Hà",
        codename: "xa_phu_son_lam_ha",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Nam Hà Lâm Hà",
        codename: "xa_nam_ha_lam_ha",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nam Ban Lâm Hà",
        codename: "xa_nam_ban_lam_ha",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Tân Hà Lâm Hà",
        codename: "xa_tan_ha_lam_ha",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Phúc Thọ Lâm Hà",
        codename: "xa_phuc_tho_lam_ha",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Đam Rông 1",
        codename: "xa_đam_rong_1",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Đam Rông 2",
        codename: "xa_đam_rong_2",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Đam Rông 3",
        codename: "xa_đam_rong_3",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Đam Rông 4",
        codename: "xa_đam_rong_4",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Di Linh",
        codename: "xa_di_linh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Hòa Ninh",
        codename: "xa_hoa_ninh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Hòa Bắc",
        codename: "xa_hoa_bac",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Đinh Trang Thượng",
        codename: "xa_đinh_trang_thuong",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Bảo Thuận",
        codename: "xa_bao_thuan",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Sơn Điền",
        codename: "xa_son_đien",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Gia Hiệp",
        codename: "xa_gia_hiep",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Bảo Lâm 1",
        codename: "xa_bao_lam_1",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Bảo Lâm 2",
        codename: "xa_bao_lam_2",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Bảo Lâm 3",
        codename: "xa_bao_lam_3",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Bảo Lâm 4",
        codename: "xa_bao_lam_4",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Bảo Lâm 5",
        codename: "xa_bao_lam_5",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Đạ Huoai",
        codename: "xa_đa_huoai",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Đạ Huoai 2",
        codename: "xa_đa_huoai_2",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Đạ Tẻh",
        codename: "xa_đa_teh",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Đạ Tẻh 2",
        codename: "xa_đa_teh_2",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Đạ Tẻh 3",
        codename: "xa_đa_teh_3",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Cát Tiên",
        codename: "xa_cat_tien",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Cát Tiên 2",
        codename: "xa_cat_tien_2",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Cát Tiên 3",
        codename: "xa_cat_tien_3",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Vĩnh Hảo",
        codename: "xa_vinh_hao",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Liên Hương",
        codename: "xa_lien_huong",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Tuy Phong",
        codename: "xa_tuy_phong",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Phan Rí Cửa",
        codename: "xa_phan_ri_cua",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Bắc Bình",
        codename: "xa_bac_binh",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Hồng Thái",
        codename: "xa_hong_thai",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Hải Ninh",
        codename: "xa_hai_ninh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Phan Sơn",
        codename: "xa_phan_son",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Sông Lũy",
        codename: "xa_song_luy",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Lương Sơn",
        codename: "xa_luong_son",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hòa Thắng",
        codename: "xa_hoa_thang",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Đông Giang",
        codename: "xa_đong_giang",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã La Dạ",
        codename: "xa_la_da",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Hàm Thuận Bắc",
        codename: "xa_ham_thuan_bac",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Hàm Thuận",
        codename: "xa_ham_thuan",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Hồng Sơn",
        codename: "xa_hong_son",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Hàm Liêm",
        codename: "xa_ham_liem",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Tuyên Quang",
        codename: "xa_tuyen_quang",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Hàm Thạnh",
        codename: "xa_ham_thanh",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Hàm Kiệm",
        codename: "xa_ham_kiem",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Hàm Thuận Nam",
        codename: "xa_ham_thuan_nam",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Tân Lập",
        codename: "xa_tan_lap",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Tân Minh",
        codename: "xa_tan_minh",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Hàm Tân",
        codename: "xa_ham_tan",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Sơn Mỹ",
        codename: "xa_son_my",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Tân Hải",
        codename: "xa_tan_hai",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Nghị Đức",
        codename: "xa_nghi_đuc",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Bắc Ruộng",
        codename: "xa_bac_ruong",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Đồng Kho",
        codename: "xa_đong_kho",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Tánh Linh",
        codename: "xa_tanh_linh",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Suối Kiết",
        codename: "xa_suoi_kiet",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Nam Thành",
        codename: "xa_nam_thanh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Đức Linh",
        codename: "xa_đuc_linh",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Hoài Đức",
        codename: "xa_hoai_đuc",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Trà Tân",
        codename: "xa_tra_tan",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Đắk Wil",
        codename: "xa_đak_wil",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Nam Dong",
        codename: "xa_nam_dong",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Cư Jút",
        codename: "xa_cu_jut",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Thuận An",
        codename: "xa_thuan_an",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Đức Lập",
        codename: "xa_đuc_lap",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Đắk Mil",
        codename: "xa_đak_mil",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Đắk Sắk",
        codename: "xa_đak_sak",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Nam Đà",
        codename: "xa_nam_đa",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Krông Nô",
        codename: "xa_krong_no",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Nâm Nung",
        codename: "xa_nam_nung",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Quảng Phú",
        codename: "xa_quang_phu",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Đắk Song",
        codename: "xa_đak_song",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Đức An",
        codename: "xa_đuc_an",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Thuận Hạnh",
        codename: "xa_thuan_hanh",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Trường Xuân",
        codename: "xa_truong_xuan",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Tà Đùng",
        codename: "xa_ta_đung",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Quảng Khê",
        codename: "xa_quang_khe",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Quảng Tân",
        codename: "xa_quang_tan",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Tuy Đức",
        codename: "xa_tuy_đuc",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Kiến Đức",
        codename: "xa_kien_đuc",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Nhân Cơ",
        codename: "xa_nhan_co",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Quảng Tín",
        codename: "xa_quang_tin",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Phường Xuân Hương - Đà Lạt",
        codename: "phuong_xuan_huong_-_đa_lat",
        division_type: "phường",
      },

      {
        id: 100,
        name: "Phường Cam Ly - Đà Lạt",
        codename: "phuong_cam_ly_-_đa_lat",
        division_type: "phường",
      },

      {
        id: 101,
        name: "Phường Lâm Viên - Đà Lạt",
        codename: "phuong_lam_vien_-_đa_lat",
        division_type: "phường",
      },

      {
        id: 102,
        name: "Phường Xuân Trường - Đà Lạt",
        codename: "phuong_xuan_truong_-_đa_lat",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Lang Biang - Đà Lạt",
        codename: "phuong_lang_biang_-_đa_lat",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường 1 Bảo Lộc",
        codename: "phuong_1_bao_loc",
        division_type: "phường",
      },

      {
        id: 105,
        name: "Phường 2 Bảo Lộc",
        codename: "phuong_2_bao_loc",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường 3 Bảo Lộc",
        codename: "phuong_3_bao_loc",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường B’Lao",
        codename: "phuong_b’lao",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường Hàm Thắng",
        codename: "phuong_ham_thang",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường Bình Thuận",
        codename: "phuong_binh_thuan",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường Mũi Né",
        codename: "phuong_mui_ne",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường Phú Thủy",
        codename: "phuong_phu_thuy",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Phan Thiết",
        codename: "phuong_phan_thiet",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Phường Tiến Thành",
        codename: "phuong_tien_thanh",
        division_type: "phường",
      },

      {
        id: 114,
        name: "Phường La Gi",
        codename: "phuong_la_gi",
        division_type: "phường",
      },

      {
        id: 115,
        name: "Phường Phước Hội",
        codename: "phuong_phuoc_hoi",
        division_type: "phường",
      },

      {
        id: 116,
        name: "Phường Bắc Gia Nghĩa",
        codename: "phuong_bac_gia_nghia",
        division_type: "phường",
      },

      {
        id: 117,
        name: "Phường Nam Gia Nghĩa",
        codename: "phuong_nam_gia_nghia",
        division_type: "phường",
      },

      {
        id: 118,
        name: "Phường Đông Gia Nghĩa",
        codename: "phuong_đong_gia_nghia",
        division_type: "phường",
      },

      {
        id: 119,
        name: "Đặc khu Phú Quý",
        codename: "dac_khu_phu_quy",
        division_type: "đặc khu",
      },

      {
        id: 120,
        name: "Xã Đạ Huoai 3",
        codename: "xa_đa_huoai_3",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã Quảng Hòa",
        codename: "xa_quang_hoa",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Quảng Sơn",
        codename: "xa_quang_son",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Quảng Trực",
        codename: "xa_quang_truc",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Ninh Gia",
        codename: "xa_ninh_gia",
        division_type: "xã",
      },
    ],
  },
  {
    id: 27,
    code: "75",
    name: "Tỉnh Đồng Nai",
    codename: "tinh_đong_nai",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Đại Phước",
        codename: "xa_đai_phuoc",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Nhơn Trạch",
        codename: "xa_nhon_trach",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Phước An",
        codename: "xa_phuoc_an",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Phước Thái",
        codename: "xa_phuoc_thai",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Long Phước",
        codename: "xa_long_phuoc",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Long Thành",
        codename: "xa_long_thanh",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Bình An",
        codename: "xa_binh_an",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã An Phước",
        codename: "xa_an_phuoc",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã An Viễn",
        codename: "xa_an_vien",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Bình Minh",
        codename: "xa_binh_minh",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Trảng Bom",
        codename: "xa_trang_bom",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Bàu Hàm",
        codename: "xa_bau_ham",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Hưng Thịnh",
        codename: "xa_hung_thinh",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Dầu Giây",
        codename: "xa_dau_giay",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Gia Kiệm",
        codename: "xa_gia_kiem",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Thống Nhất",
        codename: "xa_thong_nhat",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Xuân Quế",
        codename: "xa_xuan_que",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Xuân Đường",
        codename: "xa_xuan_đuong",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Cẩm Mỹ",
        codename: "xa_cam_my",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Sông Ray",
        codename: "xa_song_ray",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Xuân Đông",
        codename: "xa_xuan_đong",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Xuân Định",
        codename: "xa_xuan_đinh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Xuân Phú",
        codename: "xa_xuan_phu",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Xuân Lộc",
        codename: "xa_xuan_loc",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Xuân Hòa",
        codename: "xa_xuan_hoa",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Xuân Thành",
        codename: "xa_xuan_thanh",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Xuân Bắc",
        codename: "xa_xuan_bac",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã La Ngà",
        codename: "xa_la_nga",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Định Quán",
        codename: "xa_đinh_quan",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Phú Vinh",
        codename: "xa_phu_vinh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Phú Hòa",
        codename: "xa_phu_hoa",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tà Lài",
        codename: "xa_ta_lai",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Nam Cát Tiên",
        codename: "xa_nam_cat_tien",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Tân Phú",
        codename: "xa_tan_phu",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Phú Lâm",
        codename: "xa_phu_lam",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Trị An",
        codename: "xa_tri_an",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Nha Bích",
        codename: "xa_nha_bich",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Tân Quan",
        codename: "xa_tan_quan",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Tân Hưng",
        codename: "xa_tan_hung",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Tân Khai",
        codename: "xa_tan_khai",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Minh Đức",
        codename: "xa_minh_đuc",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Lộc Thành",
        codename: "xa_loc_thanh",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Lộc Ninh",
        codename: "xa_loc_ninh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Lộc Hưng",
        codename: "xa_loc_hung",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Lộc Tấn",
        codename: "xa_loc_tan",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Lộc Thạnh",
        codename: "xa_loc_thanh",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Lộc Quang",
        codename: "xa_loc_quang",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Thiện Hưng",
        codename: "xa_thien_hung",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hưng Phước",
        codename: "xa_hung_phuoc",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Phú Nghĩa",
        codename: "xa_phu_nghia",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Đa Kia",
        codename: "xa_đa_kia",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Bình Tân",
        codename: "xa_binh_tan",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Long Hà",
        codename: "xa_long_ha",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Phú Riềng",
        codename: "xa_phu_rieng",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Phú Trung",
        codename: "xa_phu_trung",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Thuận Lợi",
        codename: "xa_thuan_loi",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Đồng Tâm",
        codename: "xa_đong_tam",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Tân Lợi",
        codename: "xa_tan_loi",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Đồng Phú",
        codename: "xa_đong_phu",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Phước Sơn",
        codename: "xa_phuoc_son",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Nghĩa Trung",
        codename: "xa_nghia_trung",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Bù Đăng",
        codename: "xa_bu_đang",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Thọ Sơn",
        codename: "xa_tho_son",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Đak Nhau",
        codename: "xa_đak_nhau",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Bom Bo",
        codename: "xa_bom_bo",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Phường Biên Hòa",
        codename: "phuong_bien_hoa",
        division_type: "phường",
      },

      {
        id: 69,
        name: "Phường Trấn Biên",
        codename: "phuong_tran_bien",
        division_type: "phường",
      },

      {
        id: 70,
        name: "Phường Tam Hiệp",
        codename: "phuong_tam_hiep",
        division_type: "phường",
      },

      {
        id: 71,
        name: "Phường Long Bình",
        codename: "phuong_long_binh",
        division_type: "phường",
      },

      {
        id: 72,
        name: "Phường Trảng Dài",
        codename: "phuong_trang_dai",
        division_type: "phường",
      },

      {
        id: 73,
        name: "Phường Hố Nai",
        codename: "phuong_ho_nai",
        division_type: "phường",
      },

      {
        id: 74,
        name: "Phường Long Hưng",
        codename: "phuong_long_hung",
        division_type: "phường",
      },

      {
        id: 75,
        name: "Phường Bình Lộc",
        codename: "phuong_binh_loc",
        division_type: "phường",
      },

      {
        id: 76,
        name: "Phường Bảo Vinh",
        codename: "phuong_bao_vinh",
        division_type: "phường",
      },

      {
        id: 77,
        name: "Phường Xuân Lập",
        codename: "phuong_xuan_lap",
        division_type: "phường",
      },

      {
        id: 78,
        name: "Phường Long Khánh",
        codename: "phuong_long_khanh",
        division_type: "phường",
      },

      {
        id: 79,
        name: "Phường Hàng Gòn",
        codename: "phuong_hang_gon",
        division_type: "phường",
      },

      {
        id: 80,
        name: "Phường Tân Triều",
        codename: "phuong_tan_trieu",
        division_type: "phường",
      },

      {
        id: 81,
        name: "Phường Minh Hưng",
        codename: "phuong_minh_hung",
        division_type: "phường",
      },

      {
        id: 82,
        name: "Phường Chơn Thành",
        codename: "phuong_chon_thanh",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Bình Long",
        codename: "phuong_binh_long",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường An Lộc",
        codename: "phuong_an_loc",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Phước Bình",
        codename: "phuong_phuoc_binh",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Phước Long",
        codename: "phuong_phuoc_long",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Đồng Xoài",
        codename: "phuong_đong_xoai",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Bình Phước",
        codename: "phuong_binh_phuoc",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Phước Tân",
        codename: "phuong_phuoc_tan",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Tam Phước",
        codename: "phuong_tam_phuoc",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Xã Thanh Sơn",
        codename: "xa_thanh_son",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Đak Lua",
        codename: "xa_đak_lua",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Phú Lý",
        codename: "xa_phu_ly",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Bù Gia Mập",
        codename: "xa_bu_gia_map",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Đăk Ơ",
        codename: "xa_đak_o",
        division_type: "xã",
      },
    ],
  },
  {
    id: 28,
    code: "79",
    name: "Thành phố Hồ Chí Minh",
    codename: "thanh_pho_ho_chi_minh",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường Sài Gòn",
        codename: "phuong_sai_gon",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Tân Định",
        codename: "phuong_tan_đinh",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Bến Thành",
        codename: "phuong_ben_thanh",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường Cầu Ông Lãnh",
        codename: "phuong_cau_ong_lanh",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Bàn Cờ",
        codename: "phuong_ban_co",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Xuân Hòa",
        codename: "phuong_xuan_hoa",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Nhiêu Lộc",
        codename: "phuong_nhieu_loc",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Xóm Chiếu",
        codename: "phuong_xom_chieu",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Khánh Hội",
        codename: "phuong_khanh_hoi",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Vĩnh Hội",
        codename: "phuong_vinh_hoi",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Chợ Quán",
        codename: "phuong_cho_quan",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường An Đông",
        codename: "phuong_an_đong",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường Chợ Lớn",
        codename: "phuong_cho_lon",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Bình Tây",
        codename: "phuong_binh_tay",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Bình Tiên",
        codename: "phuong_binh_tien",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường Bình Phú",
        codename: "phuong_binh_phu",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Phú Lâm",
        codename: "phuong_phu_lam",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Tân Thuận",
        codename: "phuong_tan_thuan",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Phú Thuận",
        codename: "phuong_phu_thuan",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Tân Mỹ",
        codename: "phuong_tan_my",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Phường Tân Hưng",
        codename: "phuong_tan_hung",
        division_type: "phường",
      },

      {
        id: 22,
        name: "Phường Chánh Hưng",
        codename: "phuong_chanh_hung",
        division_type: "phường",
      },

      {
        id: 23,
        name: "Phường Phú Định",
        codename: "phuong_phu_đinh",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Phường Bình Đông",
        codename: "phuong_binh_đong",
        division_type: "phường",
      },

      {
        id: 25,
        name: "Phường Diên Hồng",
        codename: "phuong_dien_hong",
        division_type: "phường",
      },

      {
        id: 26,
        name: "Phường Vườn Lài",
        codename: "phuong_vuon_lai",
        division_type: "phường",
      },

      {
        id: 27,
        name: "Phường Hòa Hưng",
        codename: "phuong_hoa_hung",
        division_type: "phường",
      },

      {
        id: 28,
        name: "Phường Minh Phụng",
        codename: "phuong_minh_phung",
        division_type: "phường",
      },

      {
        id: 29,
        name: "Phường Bình Thới",
        codename: "phuong_binh_thoi",
        division_type: "phường",
      },

      {
        id: 30,
        name: "Phường Hòa Bình",
        codename: "phuong_hoa_binh",
        division_type: "phường",
      },

      {
        id: 31,
        name: "Phường Phú Thọ",
        codename: "phuong_phu_tho",
        division_type: "phường",
      },

      {
        id: 32,
        name: "Phường Đông Hưng Thuận",
        codename: "phuong_đong_hung_thuan",
        division_type: "phường",
      },

      {
        id: 33,
        name: "Phường Trung Mỹ Tây",
        codename: "phuong_trung_my_tay",
        division_type: "phường",
      },

      {
        id: 34,
        name: "Phường Tân Thới Hiệp",
        codename: "phuong_tan_thoi_hiep",
        division_type: "phường",
      },

      {
        id: 35,
        name: "Phường Thới An",
        codename: "phuong_thoi_an",
        division_type: "phường",
      },

      {
        id: 36,
        name: "Phường An Phú Đông",
        codename: "phuong_an_phu_đong",
        division_type: "phường",
      },

      {
        id: 37,
        name: "Phường An Lạc",
        codename: "phuong_an_lac",
        division_type: "phường",
      },

      {
        id: 38,
        name: "Phường Bình Tân",
        codename: "phuong_binh_tan",
        division_type: "phường",
      },

      {
        id: 39,
        name: "Phường Tân Tạo",
        codename: "phuong_tan_tao",
        division_type: "phường",
      },

      {
        id: 40,
        name: "Phường Bình Trị Đông",
        codename: "phuong_binh_tri_đong",
        division_type: "phường",
      },

      {
        id: 41,
        name: "Phường Bình Hưng Hòa",
        codename: "phuong_binh_hung_hoa",
        division_type: "phường",
      },

      {
        id: 42,
        name: "Phường Gia Định",
        codename: "phuong_gia_đinh",
        division_type: "phường",
      },

      {
        id: 43,
        name: "Phường Bình Thạnh",
        codename: "phuong_binh_thanh",
        division_type: "phường",
      },

      {
        id: 44,
        name: "Phường Bình Lợi Trung",
        codename: "phuong_binh_loi_trung",
        division_type: "phường",
      },

      {
        id: 45,
        name: "Phường Thạnh Mỹ Tây",
        codename: "phuong_thanh_my_tay",
        division_type: "phường",
      },

      {
        id: 46,
        name: "Phường Bình Quới",
        codename: "phuong_binh_quoi",
        division_type: "phường",
      },

      {
        id: 47,
        name: "Phường Hạnh Thông",
        codename: "phuong_hanh_thong",
        division_type: "phường",
      },

      {
        id: 48,
        name: "Phường An Nhơn",
        codename: "phuong_an_nhon",
        division_type: "phường",
      },

      {
        id: 49,
        name: "Phường Gò Vấp",
        codename: "phuong_go_vap",
        division_type: "phường",
      },

      {
        id: 50,
        name: "Phường An Hội Đông",
        codename: "phuong_an_hoi_đong",
        division_type: "phường",
      },

      {
        id: 51,
        name: "Phường Thông Tây Hội",
        codename: "phuong_thong_tay_hoi",
        division_type: "phường",
      },

      {
        id: 52,
        name: "Phường An Hội Tây",
        codename: "phuong_an_hoi_tay",
        division_type: "phường",
      },

      {
        id: 53,
        name: "Phường Đức Nhuận",
        codename: "phuong_đuc_nhuan",
        division_type: "phường",
      },

      {
        id: 54,
        name: "Phường Cầu Kiệu",
        codename: "phuong_cau_kieu",
        division_type: "phường",
      },

      {
        id: 55,
        name: "Phường Phú Nhuận",
        codename: "phuong_phu_nhuan",
        division_type: "phường",
      },

      {
        id: 56,
        name: "Phường Tân Sơn Hòa",
        codename: "phuong_tan_son_hoa",
        division_type: "phường",
      },

      {
        id: 57,
        name: "Phường Tân Sơn Nhất",
        codename: "phuong_tan_son_nhat",
        division_type: "phường",
      },

      {
        id: 58,
        name: "Phường Tân Hòa",
        codename: "phuong_tan_hoa",
        division_type: "phường",
      },

      {
        id: 59,
        name: "Phường Bảy Hiền",
        codename: "phuong_bay_hien",
        division_type: "phường",
      },

      {
        id: 60,
        name: "Phường Tân Bình",
        codename: "phuong_tan_binh",
        division_type: "phường",
      },

      {
        id: 61,
        name: "Phường Tân Sơn",
        codename: "phuong_tan_son",
        division_type: "phường",
      },

      {
        id: 62,
        name: "Phường Tây Thạnh",
        codename: "phuong_tay_thanh",
        division_type: "phường",
      },

      {
        id: 63,
        name: "Phường Tân Sơn Nhì",
        codename: "phuong_tan_son_nhi",
        division_type: "phường",
      },

      {
        id: 64,
        name: "Phường Phú Thọ Hòa",
        codename: "phuong_phu_tho_hoa",
        division_type: "phường",
      },

      {
        id: 65,
        name: "Phường Tân Phú",
        codename: "phuong_tan_phu",
        division_type: "phường",
      },

      {
        id: 66,
        name: "Phường Phú Thạnh",
        codename: "phuong_phu_thanh",
        division_type: "phường",
      },

      {
        id: 67,
        name: "Phường Hiệp Bình",
        codename: "phuong_hiep_binh",
        division_type: "phường",
      },

      {
        id: 68,
        name: "Phường Thủ Đức",
        codename: "phuong_thu_đuc",
        division_type: "phường",
      },

      {
        id: 69,
        name: "Phường Tam Bình",
        codename: "phuong_tam_binh",
        division_type: "phường",
      },

      {
        id: 70,
        name: "Phường Linh Xuân",
        codename: "phuong_linh_xuan",
        division_type: "phường",
      },

      {
        id: 71,
        name: "Phường Tăng Nhơn Phú",
        codename: "phuong_tang_nhon_phu",
        division_type: "phường",
      },

      {
        id: 72,
        name: "Phường Long Bình",
        codename: "phuong_long_binh",
        division_type: "phường",
      },

      {
        id: 73,
        name: "Phường Long Phước",
        codename: "phuong_long_phuoc",
        division_type: "phường",
      },

      {
        id: 74,
        name: "Phường Long Trường",
        codename: "phuong_long_truong",
        division_type: "phường",
      },

      {
        id: 75,
        name: "Phường Cát Lái",
        codename: "phuong_cat_lai",
        division_type: "phường",
      },

      {
        id: 76,
        name: "Phường Bình Trưng",
        codename: "phuong_binh_trung",
        division_type: "phường",
      },

      {
        id: 77,
        name: "Phường Phước Long",
        codename: "phuong_phuoc_long",
        division_type: "phường",
      },

      {
        id: 78,
        name: "Phường An Khánh",
        codename: "phuong_an_khanh",
        division_type: "phường",
      },

      {
        id: 79,
        name: "Phường Đông Hòa",
        codename: "phuong_đong_hoa",
        division_type: "phường",
      },

      {
        id: 80,
        name: "Phường Dĩ An",
        codename: "phuong_di_an",
        division_type: "phường",
      },

      {
        id: 81,
        name: "Phường Tân Đông Hiệp",
        codename: "phuong_tan_đong_hiep",
        division_type: "phường",
      },

      {
        id: 82,
        name: "Phường An Phú",
        codename: "phuong_an_phu",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Bình Hòa",
        codename: "phuong_binh_hoa",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Lái Thiêu",
        codename: "phuong_lai_thieu",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Thuận An",
        codename: "phuong_thuan_an",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Thuận Giao",
        codename: "phuong_thuan_giao",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Thủ Dầu Một",
        codename: "phuong_thu_dau_mot",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Phú Lợi",
        codename: "phuong_phu_loi",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Chánh Hiệp",
        codename: "phuong_chanh_hiep",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Bình Dương",
        codename: "phuong_binh_duong",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Hòa Lợi",
        codename: "phuong_hoa_loi",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường Phú An",
        codename: "phuong_phu_an",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Tây Nam",
        codename: "phuong_tay_nam",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Phường Long Nguyên",
        codename: "phuong_long_nguyen",
        division_type: "phường",
      },

      {
        id: 95,
        name: "Phường Bến Cát",
        codename: "phuong_ben_cat",
        division_type: "phường",
      },

      {
        id: 96,
        name: "Phường Chánh Phú Hòa",
        codename: "phuong_chanh_phu_hoa",
        division_type: "phường",
      },

      {
        id: 97,
        name: "Phường Vĩnh Tân",
        codename: "phuong_vinh_tan",
        division_type: "phường",
      },

      {
        id: 98,
        name: "Phường Bình Cơ",
        codename: "phuong_binh_co",
        division_type: "phường",
      },

      {
        id: 99,
        name: "Phường Tân Uyên",
        codename: "phuong_tan_uyen",
        division_type: "phường",
      },

      {
        id: 100,
        name: "Phường Tân Hiệp",
        codename: "phuong_tan_hiep",
        division_type: "phường",
      },

      {
        id: 101,
        name: "Phường Tân Khánh",
        codename: "phuong_tan_khanh",
        division_type: "phường",
      },

      {
        id: 102,
        name: "Phường Vũng Tàu",
        codename: "phuong_vung_tau",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Tam Thắng",
        codename: "phuong_tam_thang",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường Rạch Dừa",
        codename: "phuong_rach_dua",
        division_type: "phường",
      },

      {
        id: 105,
        name: "Phường Phước Thắng",
        codename: "phuong_phuoc_thang",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường Long Hương",
        codename: "phuong_long_huong",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường Bà Rịa",
        codename: "phuong_ba_ria",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường Tam Long",
        codename: "phuong_tam_long",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường Tân Hải",
        codename: "phuong_tan_hai",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường Tân Phước",
        codename: "phuong_tan_phuoc",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường Phú Mỹ",
        codename: "phuong_phu_my",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Tân Thành",
        codename: "phuong_tan_thanh",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Xã Vĩnh Lộc",
        codename: "xa_vinh_loc",
        division_type: "xã",
      },

      {
        id: 114,
        name: "Xã Tân Vĩnh Lộc",
        codename: "xa_tan_vinh_loc",
        division_type: "xã",
      },

      {
        id: 115,
        name: "Xã Bình Lợi",
        codename: "xa_binh_loi",
        division_type: "xã",
      },

      {
        id: 116,
        name: "Xã Tân Nhựt",
        codename: "xa_tan_nhut",
        division_type: "xã",
      },

      {
        id: 117,
        name: "Xã Bình Chánh",
        codename: "xa_binh_chanh",
        division_type: "xã",
      },

      {
        id: 118,
        name: "Xã Hưng Long",
        codename: "xa_hung_long",
        division_type: "xã",
      },

      {
        id: 119,
        name: "Xã Bình Hưng",
        codename: "xa_binh_hung",
        division_type: "xã",
      },

      {
        id: 120,
        name: "Xã Bình Khánh",
        codename: "xa_binh_khanh",
        division_type: "xã",
      },

      {
        id: 121,
        name: "Xã An Thới Đông",
        codename: "xa_an_thoi_đong",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Cần Giờ",
        codename: "xa_can_gio",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Củ Chi",
        codename: "xa_cu_chi",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Tân An Hội",
        codename: "xa_tan_an_hoi",
        division_type: "xã",
      },

      {
        id: 125,
        name: "Xã Thái Mỹ",
        codename: "xa_thai_my",
        division_type: "xã",
      },

      {
        id: 126,
        name: "Xã An Nhơn Tây",
        codename: "xa_an_nhon_tay",
        division_type: "xã",
      },

      {
        id: 127,
        name: "Xã Nhuận Đức",
        codename: "xa_nhuan_đuc",
        division_type: "xã",
      },

      {
        id: 128,
        name: "Xã Phú Hòa Đông",
        codename: "xa_phu_hoa_đong",
        division_type: "xã",
      },

      {
        id: 129,
        name: "Xã Bình Mỹ",
        codename: "xa_binh_my",
        division_type: "xã",
      },

      {
        id: 130,
        name: "Xã Đông Thạnh",
        codename: "xa_đong_thanh",
        division_type: "xã",
      },

      {
        id: 131,
        name: "Xã Hóc Môn",
        codename: "xa_hoc_mon",
        division_type: "xã",
      },

      {
        id: 132,
        name: "Xã Xuân Thới Sơn",
        codename: "xa_xuan_thoi_son",
        division_type: "xã",
      },

      {
        id: 133,
        name: "Xã Bà Điểm",
        codename: "xa_ba_điem",
        division_type: "xã",
      },

      {
        id: 134,
        name: "Xã Nhà Bè",
        codename: "xa_nha_be",
        division_type: "xã",
      },

      {
        id: 135,
        name: "Xã Hiệp Phước",
        codename: "xa_hiep_phuoc",
        division_type: "xã",
      },

      {
        id: 136,
        name: "Xã Thường Tân",
        codename: "xa_thuong_tan",
        division_type: "xã",
      },

      {
        id: 137,
        name: "Xã Bắc Tân Uyên",
        codename: "xa_bac_tan_uyen",
        division_type: "xã",
      },

      {
        id: 138,
        name: "Xã Phú Giáo",
        codename: "xa_phu_giao",
        division_type: "xã",
      },

      {
        id: 139,
        name: "Xã Phước Hòa",
        codename: "xa_phuoc_hoa",
        division_type: "xã",
      },

      {
        id: 140,
        name: "Xã Phước Thành",
        codename: "xa_phuoc_thanh",
        division_type: "xã",
      },

      {
        id: 141,
        name: "Xã An Long",
        codename: "xa_an_long",
        division_type: "xã",
      },

      {
        id: 142,
        name: "Xã Trừ Văn Thố",
        codename: "xa_tru_van_tho",
        division_type: "xã",
      },

      {
        id: 143,
        name: "Xã Bàu Bàng",
        codename: "xa_bau_bang",
        division_type: "xã",
      },

      {
        id: 144,
        name: "Xã Long Hòa",
        codename: "xa_long_hoa",
        division_type: "xã",
      },

      {
        id: 145,
        name: "Xã Thanh An",
        codename: "xa_thanh_an",
        division_type: "xã",
      },

      {
        id: 146,
        name: "Xã Dầu Tiếng",
        codename: "xa_dau_tieng",
        division_type: "xã",
      },

      {
        id: 147,
        name: "Xã Minh Thạnh",
        codename: "xa_minh_thanh",
        division_type: "xã",
      },

      {
        id: 148,
        name: "Xã Châu Pha",
        codename: "xa_chau_pha",
        division_type: "xã",
      },

      {
        id: 149,
        name: "Xã Long Hải",
        codename: "xa_long_hai",
        division_type: "xã",
      },

      {
        id: 150,
        name: "Xã Long Điền",
        codename: "xa_long_đien",
        division_type: "xã",
      },

      {
        id: 151,
        name: "Xã Phước Hải",
        codename: "xa_phuoc_hai",
        division_type: "xã",
      },

      {
        id: 152,
        name: "Xã Đất Đỏ",
        codename: "xa_đat_đo",
        division_type: "xã",
      },

      {
        id: 153,
        name: "Xã Nghĩa Thành",
        codename: "xa_nghia_thanh",
        division_type: "xã",
      },

      {
        id: 154,
        name: "Xã Ngãi Giao",
        codename: "xa_ngai_giao",
        division_type: "xã",
      },

      {
        id: 155,
        name: "Xã Kim Long",
        codename: "xa_kim_long",
        division_type: "xã",
      },

      {
        id: 156,
        name: "Xã Châu Đức",
        codename: "xa_chau_đuc",
        division_type: "xã",
      },

      {
        id: 157,
        name: "Xã Bình Giã",
        codename: "xa_binh_gia",
        division_type: "xã",
      },

      {
        id: 158,
        name: "Xã Xuân Sơn",
        codename: "xa_xuan_son",
        division_type: "xã",
      },

      {
        id: 159,
        name: "Xã Hồ Tràm",
        codename: "xa_ho_tram",
        division_type: "xã",
      },

      {
        id: 160,
        name: "Xã Xuyên Mộc",
        codename: "xa_xuyen_moc",
        division_type: "xã",
      },

      {
        id: 161,
        name: "Xã Hòa Hội",
        codename: "xa_hoa_hoi",
        division_type: "xã",
      },

      {
        id: 162,
        name: "Xã Bàu Lâm",
        codename: "xa_bau_lam",
        division_type: "xã",
      },

      {
        id: 163,
        name: "Đặc khu Côn Đảo",
        codename: "dac_khu_con_đao",
        division_type: "đặc khu",
      },

      {
        id: 164,
        name: "Phường Thới Hòa",
        codename: "phuong_thoi_hoa",
        division_type: "phường",
      },

      {
        id: 165,
        name: "Xã Long Sơn",
        codename: "xa_long_son",
        division_type: "xã",
      },

      {
        id: 166,
        name: "Xã Hòa Hiệp",
        codename: "xa_hoa_hiep",
        division_type: "xã",
      },

      {
        id: 167,
        name: "Xã Bình Châu",
        codename: "xa_binh_chau",
        division_type: "xã",
      },

      {
        id: 168,
        name: "Xã Thạnh An",
        codename: "xa_thanh_an",
        division_type: "xã",
      },
    ],
  },
  {
    id: 29,
    code: "80",
    name: "Tỉnh Tây Ninh",
    codename: "tinh_tay_ninh",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Hưng Điền",
        codename: "xa_hung_đien",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Vĩnh Thạnh",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tân Hưng",
        codename: "xa_tan_hung",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Vĩnh Châu",
        codename: "xa_vinh_chau",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Tuyên Bình",
        codename: "xa_tuyen_binh",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Vĩnh Hưng",
        codename: "xa_vinh_hung",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Khánh Hưng",
        codename: "xa_khanh_hung",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Tuyên Thạnh",
        codename: "xa_tuyen_thanh",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Bình Hiệp",
        codename: "xa_binh_hiep",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Bình Hòa",
        codename: "xa_binh_hoa",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Mộc Hóa",
        codename: "xa_moc_hoa",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Hậu Thạnh",
        codename: "xa_hau_thanh",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Nhơn Hòa Lập",
        codename: "xa_nhon_hoa_lap",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Nhơn Ninh",
        codename: "xa_nhon_ninh",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Tân Thạnh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Bình Thành",
        codename: "xa_binh_thanh",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Thạnh Phước",
        codename: "xa_thanh_phuoc",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Thạnh Hóa",
        codename: "xa_thanh_hoa",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Tân Tây",
        codename: "xa_tan_tay",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Thủ Thừa",
        codename: "xa_thu_thua",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Mỹ An",
        codename: "xa_my_an",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Mỹ Thạnh",
        codename: "xa_my_thanh",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Tân Long",
        codename: "xa_tan_long",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Mỹ Quý",
        codename: "xa_my_quy",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Đông Thành",
        codename: "xa_đong_thanh",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Đức Huệ",
        codename: "xa_đuc_hue",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã An Ninh",
        codename: "xa_an_ninh",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Hiệp Hòa",
        codename: "xa_hiep_hoa",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Hậu Nghĩa",
        codename: "xa_hau_nghia",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Hòa Khánh",
        codename: "xa_hoa_khanh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Đức Lập",
        codename: "xa_đuc_lap",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Mỹ Hạnh",
        codename: "xa_my_hanh",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Đức Hòa",
        codename: "xa_đuc_hoa",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Thạnh Lợi",
        codename: "xa_thanh_loi",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Bình Đức",
        codename: "xa_binh_đuc",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Lương Hòa",
        codename: "xa_luong_hoa",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Bến Lức",
        codename: "xa_ben_luc",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Mỹ Yên",
        codename: "xa_my_yen",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Long Cang",
        codename: "xa_long_cang",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Rạch Kiến",
        codename: "xa_rach_kien",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Mỹ Lệ",
        codename: "xa_my_le",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Tân Lân",
        codename: "xa_tan_lan",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Cần Đước",
        codename: "xa_can_đuoc",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Long Hựu",
        codename: "xa_long_huu",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Phước Lý",
        codename: "xa_phuoc_ly",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Mỹ Lộc",
        codename: "xa_my_loc",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Cần Giuộc",
        codename: "xa_can_giuoc",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Phước Vĩnh Tây",
        codename: "xa_phuoc_vinh_tay",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Tân Tập",
        codename: "xa_tan_tap",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Vàm Cỏ",
        codename: "xa_vam_co",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Tân Trụ",
        codename: "xa_tan_tru",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Nhựt Tảo",
        codename: "xa_nhut_tao",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Thuận Mỹ",
        codename: "xa_thuan_my",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã An Lục Long",
        codename: "xa_an_luc_long",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Tầm Vu",
        codename: "xa_tam_vu",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Vĩnh Công",
        codename: "xa_vinh_cong",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Phước Chỉ",
        codename: "xa_phuoc_chi",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Hưng Thuận",
        codename: "xa_hung_thuan",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Thạnh Đức",
        codename: "xa_thanh_đuc",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Phước Thạnh",
        codename: "xa_phuoc_thanh",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Truông Mít",
        codename: "xa_truong_mit",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Lộc Ninh",
        codename: "xa_loc_ninh",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Cầu Khởi",
        codename: "xa_cau_khoi",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Dương Minh Châu",
        codename: "xa_duong_minh_chau",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Tân Đông",
        codename: "xa_tan_đong",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Tân Châu",
        codename: "xa_tan_chau",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Tân Phú",
        codename: "xa_tan_phu",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Tân Hội",
        codename: "xa_tan_hoi",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Tân Hòa",
        codename: "xa_tan_hoa",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Tân Lập",
        codename: "xa_tan_lap",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Tân Biên",
        codename: "xa_tan_bien",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Thạnh Bình",
        codename: "xa_thanh_binh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Trà Vong",
        codename: "xa_tra_vong",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Phước Vinh",
        codename: "xa_phuoc_vinh",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Hòa Hội",
        codename: "xa_hoa_hoi",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Ninh Điền",
        codename: "xa_ninh_đien",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Châu Thành",
        codename: "xa_chau_thanh",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Hảo Đước",
        codename: "xa_hao_đuoc",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Long Chữ",
        codename: "xa_long_chu",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Long Thuận",
        codename: "xa_long_thuan",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Bến Cầu",
        codename: "xa_ben_cau",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Phường Kiến Tường",
        codename: "phuong_kien_tuong",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Long An",
        codename: "phuong_long_an",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Tân An",
        codename: "phuong_tan_an",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Khánh Hậu",
        codename: "phuong_khanh_hau",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Tân Ninh",
        codename: "phuong_tan_ninh",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Bình Minh",
        codename: "phuong_binh_minh",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Ninh Thạnh",
        codename: "phuong_ninh_thanh",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Long Hoa",
        codename: "phuong_long_hoa",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Hòa Thành",
        codename: "phuong_hoa_thanh",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường Thanh Điền",
        codename: "phuong_thanh_đien",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Trảng Bàng",
        codename: "phuong_trang_bang",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Phường An Tịnh",
        codename: "phuong_an_tinh",
        division_type: "phường",
      },

      {
        id: 95,
        name: "Phường Gò Dầu",
        codename: "phuong_go_dau",
        division_type: "phường",
      },

      {
        id: 96,
        name: "Phường Gia Lộc",
        codename: "phuong_gia_loc",
        division_type: "phường",
      },
    ],
  },
  {
    id: 30,
    code: "82",
    name: "Tỉnh Đồng Tháp",
    codename: "tinh_đong_thap",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Tân Hồng",
        codename: "xa_tan_hong",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Tân Thành",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tân Hộ Cơ",
        codename: "xa_tan_ho_co",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã An Phước",
        codename: "xa_an_phuoc",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Thường Phước",
        codename: "xa_thuong_phuoc",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Long Khánh",
        codename: "xa_long_khanh",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Long Phú Thuận",
        codename: "xa_long_phu_thuan",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã An Hòa",
        codename: "xa_an_hoa",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Tam Nông",
        codename: "xa_tam_nong",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Phú Thọ",
        codename: "xa_phu_tho",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Tràm Chim",
        codename: "xa_tram_chim",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Phú Cường",
        codename: "xa_phu_cuong",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã An Long",
        codename: "xa_an_long",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Thanh Bình",
        codename: "xa_thanh_binh",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Tân Thạnh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Bình Thành",
        codename: "xa_binh_thanh",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Tân Long",
        codename: "xa_tan_long",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Tháp Mười",
        codename: "xa_thap_muoi",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Thanh Mỹ",
        codename: "xa_thanh_my",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Mỹ Quí",
        codename: "xa_my_qui",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Đốc Binh Kiều",
        codename: "xa_đoc_binh_kieu",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Trường Xuân",
        codename: "xa_truong_xuan",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Phương Thịnh",
        codename: "xa_phuong_thinh",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Phong Mỹ",
        codename: "xa_phong_my",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Ba Sao",
        codename: "xa_ba_sao",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Mỹ Thọ",
        codename: "xa_my_tho",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Bình Hàng Trung",
        codename: "xa_binh_hang_trung",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Mỹ Hiệp",
        codename: "xa_my_hiep",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Mỹ An Hưng",
        codename: "xa_my_an_hung",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Tân Khánh Trung",
        codename: "xa_tan_khanh_trung",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Lấp Vò",
        codename: "xa_lap_vo",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Lai Vung",
        codename: "xa_lai_vung",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Hòa Long",
        codename: "xa_hoa_long",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Phong Hòa",
        codename: "xa_phong_hoa",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Tân Dương",
        codename: "xa_tan_duong",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Phú Hựu",
        codename: "xa_phu_huu",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Tân Nhuận Đông",
        codename: "xa_tan_nhuan_đong",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Tân Phú Trung",
        codename: "xa_tan_phu_trung",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Tân Phú",
        codename: "xa_tan_phu",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Thanh Hưng",
        codename: "xa_thanh_hung",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã An Hữu",
        codename: "xa_an_huu",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Mỹ Lợi",
        codename: "xa_my_loi",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Mỹ Đức Tây",
        codename: "xa_my_đuc_tay",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Mỹ Thiện",
        codename: "xa_my_thien",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Hậu Mỹ",
        codename: "xa_hau_my",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Hội Cư",
        codename: "xa_hoi_cu",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Cái Bè",
        codename: "xa_cai_be",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Mỹ Thành",
        codename: "xa_my_thanh",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Thạnh Phú",
        codename: "xa_thanh_phu",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Bình Phú",
        codename: "xa_binh_phu",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Hiệp Đức",
        codename: "xa_hiep_đuc",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Long Tiên",
        codename: "xa_long_tien",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Ngũ Hiệp",
        codename: "xa_ngu_hiep",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Tân Phước 1",
        codename: "xa_tan_phuoc_1",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Tân Phước 2",
        codename: "xa_tan_phuoc_2",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Tân Phước 3",
        codename: "xa_tan_phuoc_3",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Hưng Thạnh",
        codename: "xa_hung_thanh",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Tân Hương",
        codename: "xa_tan_huong",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Châu Thành",
        codename: "xa_chau_thanh",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Long Hưng",
        codename: "xa_long_hung",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Long Định",
        codename: "xa_long_đinh",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Bình Trưng",
        codename: "xa_binh_trung",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Vĩnh Kim",
        codename: "xa_vinh_kim",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Kim Sơn",
        codename: "xa_kim_son",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Mỹ Tịnh An",
        codename: "xa_my_tinh_an",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Lương Hòa Lạc",
        codename: "xa_luong_hoa_lac",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Tân Thuận Bình",
        codename: "xa_tan_thuan_binh",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Chợ Gạo",
        codename: "xa_cho_gao",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã An Thạnh Thủy",
        codename: "xa_an_thanh_thuy",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Bình Ninh",
        codename: "xa_binh_ninh",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Vĩnh Bình",
        codename: "xa_vinh_binh",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Đồng Sơn",
        codename: "xa_đong_son",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Phú Thành",
        codename: "xa_phu_thanh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Long Bình",
        codename: "xa_long_binh",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Vĩnh Hựu",
        codename: "xa_vinh_huu",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Gò Công Đông",
        codename: "xa_go_cong_đong",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Tân Điền",
        codename: "xa_tan_đien",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Tân Hòa",
        codename: "xa_tan_hoa",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Tân Đông",
        codename: "xa_tan_đong",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Gia Thuận",
        codename: "xa_gia_thuan",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Tân Thới",
        codename: "xa_tan_thoi",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Tân Phú Đông",
        codename: "xa_tan_phu_đong",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Phường Mỹ Tho",
        codename: "phuong_my_tho",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Đạo Thạnh",
        codename: "phuong_đao_thanh",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Mỹ Phong",
        codename: "phuong_my_phong",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Thới Sơn",
        codename: "phuong_thoi_son",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Trung An",
        codename: "phuong_trung_an",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Gò Công",
        codename: "phuong_go_cong",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Long Thuận",
        codename: "phuong_long_thuan",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Bình Xuân",
        codename: "phuong_binh_xuan",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Sơn Qui",
        codename: "phuong_son_qui",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường An Bình",
        codename: "phuong_an_binh",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Hồng Ngự",
        codename: "phuong_hong_ngu",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Phường Thường Lạc",
        codename: "phuong_thuong_lac",
        division_type: "phường",
      },

      {
        id: 95,
        name: "Phường Cao Lãnh",
        codename: "phuong_cao_lanh",
        division_type: "phường",
      },

      {
        id: 96,
        name: "Phường Mỹ Ngãi",
        codename: "phuong_my_ngai",
        division_type: "phường",
      },

      {
        id: 97,
        name: "Phường Mỹ Trà",
        codename: "phuong_my_tra",
        division_type: "phường",
      },

      {
        id: 98,
        name: "Phường Sa Đéc",
        codename: "phuong_sa_đec",
        division_type: "phường",
      },

      {
        id: 99,
        name: "Phường Mỹ Phước Tây",
        codename: "phuong_my_phuoc_tay",
        division_type: "phường",
      },

      {
        id: 100,
        name: "Phường Thanh Hòa",
        codename: "phuong_thanh_hoa",
        division_type: "phường",
      },

      {
        id: 101,
        name: "Phường Cai Lậy",
        codename: "phuong_cai_lay",
        division_type: "phường",
      },

      {
        id: 102,
        name: "Phường Nhị Quý",
        codename: "phuong_nhi_quy",
        division_type: "phường",
      },
    ],
  },
  {
    id: 31,
    code: "86",
    name: "Tỉnh Vĩnh Long",
    codename: "tinh_vinh_long",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Cái Nhum",
        codename: "xa_cai_nhum",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Tân Long Hội",
        codename: "xa_tan_long_hoi",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Nhơn Phú",
        codename: "xa_nhon_phu",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Bình Phước",
        codename: "xa_binh_phuoc",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã An Bình",
        codename: "xa_an_binh",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Long Hồ",
        codename: "xa_long_ho",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Phú Quới",
        codename: "xa_phu_quoi",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Quới Thiện",
        codename: "xa_quoi_thien",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Trung Thành",
        codename: "xa_trung_thanh",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Trung Ngãi",
        codename: "xa_trung_ngai",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Quới An",
        codename: "xa_quoi_an",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Trung Hiệp",
        codename: "xa_trung_hiep",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Hiếu Phụng",
        codename: "xa_hieu_phung",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Hiếu Thành",
        codename: "xa_hieu_thanh",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Lục Sĩ Thành",
        codename: "xa_luc_si_thanh",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Trà Ôn",
        codename: "xa_tra_on",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Trà Côn",
        codename: "xa_tra_con",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Vĩnh Xuân",
        codename: "xa_vinh_xuan",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Hòa Bình",
        codename: "xa_hoa_binh",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Hòa Hiệp",
        codename: "xa_hoa_hiep",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Tam Bình",
        codename: "xa_tam_binh",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Ngãi Tứ",
        codename: "xa_ngai_tu",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Song Phú",
        codename: "xa_song_phu",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Cái Ngang",
        codename: "xa_cai_ngang",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Tân Quới",
        codename: "xa_tan_quoi",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Tân Lược",
        codename: "xa_tan_luoc",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Mỹ Thuận",
        codename: "xa_my_thuan",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Long Hữu",
        codename: "xa_long_huu",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Càng Long",
        codename: "xa_cang_long",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã An Trường",
        codename: "xa_an_truong",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Nhị Long",
        codename: "xa_nhi_long",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Bình Phú",
        codename: "xa_binh_phu",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Châu Thành",
        codename: "xa_chau_thanh",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Song Lộc",
        codename: "xa_song_loc",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Hưng Mỹ",
        codename: "xa_hung_my",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Cầu Kè",
        codename: "xa_cau_ke",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Phong Thạnh",
        codename: "xa_phong_thanh",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã An Phú Tân",
        codename: "xa_an_phu_tan",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Tam Ngãi",
        codename: "xa_tam_ngai",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Tiểu Cần",
        codename: "xa_tieu_can",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Tân Hoà",
        codename: "xa_tan_hoa",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Hùng Hoà",
        codename: "xa_hung_hoa",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Tập Ngãi",
        codename: "xa_tap_ngai",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Cầu Ngang",
        codename: "xa_cau_ngang",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Mỹ Long",
        codename: "xa_my_long",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Vinh Kim",
        codename: "xa_vinh_kim",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Nhị Trường",
        codename: "xa_nhi_truong",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Hiệp Mỹ",
        codename: "xa_hiep_my",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Trà Cú",
        codename: "xa_tra_cu",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Đại An",
        codename: "xa_đai_an",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Lưu Nghiệp Anh",
        codename: "xa_luu_nghiep_anh",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Hàm Giang",
        codename: "xa_ham_giang",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Long Hiệp",
        codename: "xa_long_hiep",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Tập Sơn",
        codename: "xa_tap_son",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Long Thành",
        codename: "xa_long_thanh",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Đôn Châu",
        codename: "xa_đon_chau",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Ngũ Lạc",
        codename: "xa_ngu_lac",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Phú Túc",
        codename: "xa_phu_tuc",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Giao Long",
        codename: "xa_giao_long",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Tiên Thủy",
        codename: "xa_tien_thuy",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Tân Phú",
        codename: "xa_tan_phu",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Phú Phụng",
        codename: "xa_phu_phung",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Chợ Lách",
        codename: "xa_cho_lach",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Vĩnh Thành",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Hưng Khánh Trung",
        codename: "xa_hung_khanh_trung",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Phước Mỹ Trung",
        codename: "xa_phuoc_my_trung",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Tân Thành Bình",
        codename: "xa_tan_thanh_binh",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Nhuận Phú Tân",
        codename: "xa_nhuan_phu_tan",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Đồng Khởi",
        codename: "xa_đong_khoi",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Mỏ Cày",
        codename: "xa_mo_cay",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Thành Thới",
        codename: "xa_thanh_thoi",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã An Định",
        codename: "xa_an_đinh",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Hương Mỹ",
        codename: "xa_huong_my",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Đại Điền",
        codename: "xa_đai_đien",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Quới Điền",
        codename: "xa_quoi_đien",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Thạnh Phú",
        codename: "xa_thanh_phu",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã An Qui",
        codename: "xa_an_qui",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Thạnh Hải",
        codename: "xa_thanh_hai",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Thạnh Phong",
        codename: "xa_thanh_phong",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Tân Thủy",
        codename: "xa_tan_thuy",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Bảo Thạnh",
        codename: "xa_bao_thanh",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Ba Tri",
        codename: "xa_ba_tri",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Tân Xuân",
        codename: "xa_tan_xuan",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Mỹ Chánh Hòa",
        codename: "xa_my_chanh_hoa",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã An Ngãi Trung",
        codename: "xa_an_ngai_trung",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã An Hiệp",
        codename: "xa_an_hiep",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Hưng Nhượng",
        codename: "xa_hung_nhuong",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Giồng Trôm",
        codename: "xa_giong_trom",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Tân Hào",
        codename: "xa_tan_hao",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Phước Long",
        codename: "xa_phuoc_long",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Lương Phú",
        codename: "xa_luong_phu",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Châu Hòa",
        codename: "xa_chau_hoa",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã Lương Hòa",
        codename: "xa_luong_hoa",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Thới Thuận",
        codename: "xa_thoi_thuan",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Xã Thạnh Phước",
        codename: "xa_thanh_phuoc",
        division_type: "xã",
      },

      {
        id: 97,
        name: "Xã Bình Đại",
        codename: "xa_binh_đai",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Thạnh Trị",
        codename: "xa_thanh_tri",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Lộc Thuận",
        codename: "xa_loc_thuan",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Châu Hưng",
        codename: "xa_chau_hung",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Phú Thuận",
        codename: "xa_phu_thuan",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Phường Thanh Đức",
        codename: "phuong_thanh_đuc",
        division_type: "phường",
      },

      {
        id: 103,
        name: "Phường Long Châu",
        codename: "phuong_long_chau",
        division_type: "phường",
      },

      {
        id: 104,
        name: "Phường Phước Hậu",
        codename: "phuong_phuoc_hau",
        division_type: "phường",
      },

      {
        id: 105,
        name: "Phường Tân Hạnh",
        codename: "phuong_tan_hanh",
        division_type: "phường",
      },

      {
        id: 106,
        name: "Phường Tân Ngãi",
        codename: "phuong_tan_ngai",
        division_type: "phường",
      },

      {
        id: 107,
        name: "Phường Bình Minh",
        codename: "phuong_binh_minh",
        division_type: "phường",
      },

      {
        id: 108,
        name: "Phường Cái Vồn",
        codename: "phuong_cai_von",
        division_type: "phường",
      },

      {
        id: 109,
        name: "Phường Đông Thành",
        codename: "phuong_đong_thanh",
        division_type: "phường",
      },

      {
        id: 110,
        name: "Phường Trà Vinh",
        codename: "phuong_tra_vinh",
        division_type: "phường",
      },

      {
        id: 111,
        name: "Phường Long Đức",
        codename: "phuong_long_đuc",
        division_type: "phường",
      },

      {
        id: 112,
        name: "Phường Nguyệt Hoá",
        codename: "phuong_nguyet_hoa",
        division_type: "phường",
      },

      {
        id: 113,
        name: "Phường Hoà Thuận",
        codename: "phuong_hoa_thuan",
        division_type: "phường",
      },

      {
        id: 114,
        name: "Phường Duyên Hải",
        codename: "phuong_duyen_hai",
        division_type: "phường",
      },

      {
        id: 115,
        name: "Phường Trường Long Hoà",
        codename: "phuong_truong_long_hoa",
        division_type: "phường",
      },

      {
        id: 116,
        name: "Phường An Hội",
        codename: "phuong_an_hoi",
        division_type: "phường",
      },

      {
        id: 117,
        name: "Phường Phú Khương",
        codename: "phuong_phu_khuong",
        division_type: "phường",
      },

      {
        id: 118,
        name: "Phường Bến Tre",
        codename: "phuong_ben_tre",
        division_type: "phường",
      },

      {
        id: 119,
        name: "Phường Sơn Đông",
        codename: "phuong_son_đong",
        division_type: "phường",
      },

      {
        id: 120,
        name: "Phường Phú Tân",
        codename: "phuong_phu_tan",
        division_type: "phường",
      },

      {
        id: 121,
        name: "Xã Long Hòa",
        codename: "xa_long_hoa",
        division_type: "xã",
      },

      {
        id: 122,
        name: "Xã Đông Hải",
        codename: "xa_đong_hai",
        division_type: "xã",
      },

      {
        id: 123,
        name: "Xã Long Vĩnh",
        codename: "xa_long_vinh",
        division_type: "xã",
      },

      {
        id: 124,
        name: "Xã Hòa Minh",
        codename: "xa_hoa_minh",
        division_type: "xã",
      },
    ],
  },
  {
    id: 32,
    code: "91",
    name: "Tỉnh An Giang",
    codename: "tinh_an_giang",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã An Phú",
        codename: "xa_an_phu",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Vĩnh Hậu",
        codename: "xa_vinh_hau",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Nhơn Hội",
        codename: "xa_nhon_hoi",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Khánh Bình",
        codename: "xa_khanh_binh",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Phú Hữu",
        codename: "xa_phu_huu",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Tân An",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Châu Phong",
        codename: "xa_chau_phong",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã Vĩnh Xương",
        codename: "xa_vinh_xuong",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Phú Tân",
        codename: "xa_phu_tan",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Phú An",
        codename: "xa_phu_an",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Bình Thạnh Đông",
        codename: "xa_binh_thanh_đong",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Chợ Vàm",
        codename: "xa_cho_vam",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Hòa Lạc",
        codename: "xa_hoa_lac",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Phú Lâm",
        codename: "xa_phu_lam",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Châu Phú",
        codename: "xa_chau_phu",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Mỹ Đức",
        codename: "xa_my_đuc",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Vĩnh Thạnh Trung",
        codename: "xa_vinh_thanh_trung",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Bình Mỹ",
        codename: "xa_binh_my",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Thạnh Mỹ Tây",
        codename: "xa_thanh_my_tay",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã An Cư",
        codename: "xa_an_cu",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Núi Cấm",
        codename: "xa_nui_cam",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Ba Chúc",
        codename: "xa_ba_chuc",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Tri Tôn",
        codename: "xa_tri_ton",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Ô Lâm",
        codename: "xa_o_lam",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Cô Tô",
        codename: "xa_co_to",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Vĩnh Gia",
        codename: "xa_vinh_gia",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã An Châu",
        codename: "xa_an_chau",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Bình Hòa",
        codename: "xa_binh_hoa",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Cần Đăng",
        codename: "xa_can_đang",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Vĩnh Hanh",
        codename: "xa_vinh_hanh",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Vĩnh An",
        codename: "xa_vinh_an",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Chợ Mới",
        codename: "xa_cho_moi",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Cù Lao Giêng",
        codename: "xa_cu_lao_gieng",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Hội An",
        codename: "xa_hoi_an",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Long Điền",
        codename: "xa_long_đien",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Nhơn Mỹ",
        codename: "xa_nhon_my",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Long Kiến",
        codename: "xa_long_kien",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Thoại Sơn",
        codename: "xa_thoai_son",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Óc Eo",
        codename: "xa_oc_eo",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Định Mỹ",
        codename: "xa_đinh_my",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Phú Hòa",
        codename: "xa_phu_hoa",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Vĩnh Trạch",
        codename: "xa_vinh_trach",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Tây Phú",
        codename: "xa_tay_phu",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Vĩnh Bình",
        codename: "xa_vinh_binh",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Vĩnh Thuận",
        codename: "xa_vinh_thuan",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Vĩnh Phong",
        codename: "xa_vinh_phong",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Vĩnh Hòa",
        codename: "xa_vinh_hoa",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã U Minh Thượng",
        codename: "xa_u_minh_thuong",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Đông Hòa",
        codename: "xa_đong_hoa",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Tân Thạnh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Đông Hưng",
        codename: "xa_đong_hung",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã An Minh",
        codename: "xa_an_minh",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Vân Khánh",
        codename: "xa_van_khanh",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Tây Yên",
        codename: "xa_tay_yen",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Đông Thái",
        codename: "xa_đong_thai",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã An Biên",
        codename: "xa_an_bien",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Định Hòa",
        codename: "xa_đinh_hoa",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Gò Quao",
        codename: "xa_go_quao",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Vĩnh Hòa Hưng",
        codename: "xa_vinh_hoa_hung",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Vĩnh Tuy",
        codename: "xa_vinh_tuy",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Giồng Riềng",
        codename: "xa_giong_rieng",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Thạnh Hưng",
        codename: "xa_thanh_hung",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Long Thạnh",
        codename: "xa_long_thanh",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Hòa Hưng",
        codename: "xa_hoa_hung",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Ngọc Chúc",
        codename: "xa_ngoc_chuc",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Hòa Thuận",
        codename: "xa_hoa_thuan",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Tân Hội",
        codename: "xa_tan_hoi",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Tân Hiệp",
        codename: "xa_tan_hiep",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Thạnh Đông",
        codename: "xa_thanh_đong",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Thạnh Lộc",
        codename: "xa_thanh_loc",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Châu Thành",
        codename: "xa_chau_thanh",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Bình An",
        codename: "xa_binh_an",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Hòn Đất",
        codename: "xa_hon_đat",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã Sơn Kiên",
        codename: "xa_son_kien",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Mỹ Thuận",
        codename: "xa_my_thuan",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Hòa Điền",
        codename: "xa_hoa_đien",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Kiên Lương",
        codename: "xa_kien_luong",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Giang Thành",
        codename: "xa_giang_thanh",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã Vĩnh Điều",
        codename: "xa_vinh_đieu",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Phường Long Xuyên",
        codename: "phuong_long_xuyen",
        division_type: "phường",
      },

      {
        id: 81,
        name: "Phường Bình Đức",
        codename: "phuong_binh_đuc",
        division_type: "phường",
      },

      {
        id: 82,
        name: "Phường Mỹ Thới",
        codename: "phuong_my_thoi",
        division_type: "phường",
      },

      {
        id: 83,
        name: "Phường Châu Đốc",
        codename: "phuong_chau_đoc",
        division_type: "phường",
      },

      {
        id: 84,
        name: "Phường Vĩnh Tế",
        codename: "phuong_vinh_te",
        division_type: "phường",
      },

      {
        id: 85,
        name: "Phường Tân Châu",
        codename: "phuong_tan_chau",
        division_type: "phường",
      },

      {
        id: 86,
        name: "Phường Long Phú",
        codename: "phuong_long_phu",
        division_type: "phường",
      },

      {
        id: 87,
        name: "Phường Tịnh Biên",
        codename: "phuong_tinh_bien",
        division_type: "phường",
      },

      {
        id: 88,
        name: "Phường Thới Sơn",
        codename: "phuong_thoi_son",
        division_type: "phường",
      },

      {
        id: 89,
        name: "Phường Chi Lăng",
        codename: "phuong_chi_lang",
        division_type: "phường",
      },

      {
        id: 90,
        name: "Phường Vĩnh Thông",
        codename: "phuong_vinh_thong",
        division_type: "phường",
      },

      {
        id: 91,
        name: "Phường Rạch Giá",
        codename: "phuong_rach_gia",
        division_type: "phường",
      },

      {
        id: 92,
        name: "Phường Hà Tiên",
        codename: "phuong_ha_tien",
        division_type: "phường",
      },

      {
        id: 93,
        name: "Phường Tô Châu",
        codename: "phuong_to_chau",
        division_type: "phường",
      },

      {
        id: 94,
        name: "Đặc khu Kiên Hải",
        codename: "dac_khu_kien_hai",
        division_type: "đặc khu",
      },

      {
        id: 95,
        name: "Đặc khu Phú Quốc",
        codename: "dac_khu_phu_quoc",
        division_type: "đặc khu",
      },

      {
        id: 96,
        name: "Đặc khu Thổ Châu",
        codename: "dac_khu_tho_chau",
        division_type: "đặc khu",
      },

      {
        id: 97,
        name: "Xã Mỹ Hòa Hưng",
        codename: "xa_my_hoa_hung",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Bình Giang",
        codename: "xa_binh_giang",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Bình Sơn",
        codename: "xa_binh_son",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Hòn Nghệ",
        codename: "xa_hon_nghe",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Sơn Hải",
        codename: "xa_son_hai",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Tiên Hải",
        codename: "xa_tien_hai",
        division_type: "xã",
      },
    ],
  },
  {
    id: 33,
    code: "92",
    name: "Thành phố Cần Thơ",
    codename: "thanh_pho_can_tho",
    division_type: "thành phố trung ương",
    wards: [
      {
        id: 1,
        name: "Phường Ninh Kiều",
        codename: "phuong_ninh_kieu",
        division_type: "phường",
      },

      {
        id: 2,
        name: "Phường Cái Khế",
        codename: "phuong_cai_khe",
        division_type: "phường",
      },

      {
        id: 3,
        name: "Phường Tân An",
        codename: "phuong_tan_an",
        division_type: "phường",
      },

      {
        id: 4,
        name: "Phường An Bình",
        codename: "phuong_an_binh",
        division_type: "phường",
      },

      {
        id: 5,
        name: "Phường Thới An Đông",
        codename: "phuong_thoi_an_đong",
        division_type: "phường",
      },

      {
        id: 6,
        name: "Phường Bình Thủy",
        codename: "phuong_binh_thuy",
        division_type: "phường",
      },

      {
        id: 7,
        name: "Phường Long Tuyền",
        codename: "phuong_long_tuyen",
        division_type: "phường",
      },

      {
        id: 8,
        name: "Phường Cái Răng",
        codename: "phuong_cai_rang",
        division_type: "phường",
      },

      {
        id: 9,
        name: "Phường Hưng Phú",
        codename: "phuong_hung_phu",
        division_type: "phường",
      },

      {
        id: 10,
        name: "Phường Ô Môn",
        codename: "phuong_o_mon",
        division_type: "phường",
      },

      {
        id: 11,
        name: "Phường Phước Thới",
        codename: "phuong_phuoc_thoi",
        division_type: "phường",
      },

      {
        id: 12,
        name: "Phường Thới Long",
        codename: "phuong_thoi_long",
        division_type: "phường",
      },

      {
        id: 13,
        name: "Phường Trung Nhứt",
        codename: "phuong_trung_nhut",
        division_type: "phường",
      },

      {
        id: 14,
        name: "Phường Thuận Hưng",
        codename: "phuong_thuan_hung",
        division_type: "phường",
      },

      {
        id: 15,
        name: "Phường Thốt Nốt",
        codename: "phuong_thot_not",
        division_type: "phường",
      },

      {
        id: 16,
        name: "Phường Vị Thanh",
        codename: "phuong_vi_thanh",
        division_type: "phường",
      },

      {
        id: 17,
        name: "Phường Vị Tân",
        codename: "phuong_vi_tan",
        division_type: "phường",
      },

      {
        id: 18,
        name: "Phường Long Bình",
        codename: "phuong_long_binh",
        division_type: "phường",
      },

      {
        id: 19,
        name: "Phường Long Mỹ",
        codename: "phuong_long_my",
        division_type: "phường",
      },

      {
        id: 20,
        name: "Phường Long Phú 1",
        codename: "phuong_long_phu_1",
        division_type: "phường",
      },

      {
        id: 21,
        name: "Phường Đại Thành",
        codename: "phuong_đai_thanh",
        division_type: "phường",
      },

      {
        id: 22,
        name: "Phường Ngã Bảy",
        codename: "phuong_nga_bay",
        division_type: "phường",
      },

      {
        id: 23,
        name: "Phường Phú Lợi",
        codename: "phuong_phu_loi",
        division_type: "phường",
      },

      {
        id: 24,
        name: "Phường Sóc Trăng",
        codename: "phuong_soc_trang",
        division_type: "phường",
      },

      {
        id: 25,
        name: "Phường Mỹ Xuyên",
        codename: "phuong_my_xuyen",
        division_type: "phường",
      },

      {
        id: 26,
        name: "Phường Vĩnh Phước",
        codename: "phuong_vinh_phuoc",
        division_type: "phường",
      },

      {
        id: 27,
        name: "Phường Vĩnh Châu",
        codename: "phuong_vinh_chau",
        division_type: "phường",
      },

      {
        id: 28,
        name: "Phường Khánh Hòa",
        codename: "phuong_khanh_hoa",
        division_type: "phường",
      },

      {
        id: 29,
        name: "Phường Ngã Năm",
        codename: "phuong_nga_nam",
        division_type: "phường",
      },

      {
        id: 30,
        name: "Phường Mỹ Quới",
        codename: "phuong_my_quoi",
        division_type: "phường",
      },

      {
        id: 31,
        name: "Xã Phong Điền",
        codename: "xa_phong_đien",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Nhơn Ái",
        codename: "xa_nhon_ai",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Thới Lai",
        codename: "xa_thoi_lai",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Đông Thuận",
        codename: "xa_đong_thuan",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Trường Xuân",
        codename: "xa_truong_xuan",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Trường Thành",
        codename: "xa_truong_thanh",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Cờ Đỏ",
        codename: "xa_co_đo",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Đông Hiệp",
        codename: "xa_đong_hiep",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Trung Hưng",
        codename: "xa_trung_hung",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Vĩnh Thạnh",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Vĩnh Trinh",
        codename: "xa_vinh_trinh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã Thạnh An",
        codename: "xa_thanh_an",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Thạnh Quới",
        codename: "xa_thanh_quoi",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Hỏa Lựu",
        codename: "xa_hoa_luu",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Vị Thủy",
        codename: "xa_vi_thuy",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Vĩnh Thuận Đông",
        codename: "xa_vinh_thuan_đong",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Vị Thanh 1",
        codename: "xa_vi_thanh_1",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Vĩnh Tường",
        codename: "xa_vinh_tuong",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Vĩnh Viễn",
        codename: "xa_vinh_vien",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Xà Phiên",
        codename: "xa_xa_phien",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Lương Tâm",
        codename: "xa_luong_tam",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Thạnh Xuân",
        codename: "xa_thanh_xuan",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Tân Hòa",
        codename: "xa_tan_hoa",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Trường Long Tây",
        codename: "xa_truong_long_tay",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Xã Châu Thành",
        codename: "xa_chau_thanh",
        division_type: "xã",
      },

      {
        id: 56,
        name: "Xã Đông Phước",
        codename: "xa_đong_phuoc",
        division_type: "xã",
      },

      {
        id: 57,
        name: "Xã Phú Hữu",
        codename: "xa_phu_huu",
        division_type: "xã",
      },

      {
        id: 58,
        name: "Xã Tân Bình",
        codename: "xa_tan_binh",
        division_type: "xã",
      },

      {
        id: 59,
        name: "Xã Hòa An",
        codename: "xa_hoa_an",
        division_type: "xã",
      },

      {
        id: 60,
        name: "Xã Phương Bình",
        codename: "xa_phuong_binh",
        division_type: "xã",
      },

      {
        id: 61,
        name: "Xã Tân Phước Hưng",
        codename: "xa_tan_phuoc_hung",
        division_type: "xã",
      },

      {
        id: 62,
        name: "Xã Hiệp Hưng",
        codename: "xa_hiep_hung",
        division_type: "xã",
      },

      {
        id: 63,
        name: "Xã Phụng Hiệp",
        codename: "xa_phung_hiep",
        division_type: "xã",
      },

      {
        id: 64,
        name: "Xã Thạnh Hòa",
        codename: "xa_thanh_hoa",
        division_type: "xã",
      },

      {
        id: 65,
        name: "Xã Hòa Tú",
        codename: "xa_hoa_tu",
        division_type: "xã",
      },

      {
        id: 66,
        name: "Xã Gia Hòa",
        codename: "xa_gia_hoa",
        division_type: "xã",
      },

      {
        id: 67,
        name: "Xã Nhu Gia",
        codename: "xa_nhu_gia",
        division_type: "xã",
      },

      {
        id: 68,
        name: "Xã Ngọc Tố",
        codename: "xa_ngoc_to",
        division_type: "xã",
      },

      {
        id: 69,
        name: "Xã Trường Khánh",
        codename: "xa_truong_khanh",
        division_type: "xã",
      },

      {
        id: 70,
        name: "Xã Đại Ngãi",
        codename: "xa_đai_ngai",
        division_type: "xã",
      },

      {
        id: 71,
        name: "Xã Tân Thạnh",
        codename: "xa_tan_thanh",
        division_type: "xã",
      },

      {
        id: 72,
        name: "Xã Long Phú",
        codename: "xa_long_phu",
        division_type: "xã",
      },

      {
        id: 73,
        name: "Xã Nhơn Mỹ",
        codename: "xa_nhon_my",
        division_type: "xã",
      },

      {
        id: 74,
        name: "Xã An Lạc Thôn",
        codename: "xa_an_lac_thon",
        division_type: "xã",
      },

      {
        id: 75,
        name: "Xã Kế Sách",
        codename: "xa_ke_sach",
        division_type: "xã",
      },

      {
        id: 76,
        name: "Xã Thới An Hội",
        codename: "xa_thoi_an_hoi",
        division_type: "xã",
      },

      {
        id: 77,
        name: "Xã Đại Hải",
        codename: "xa_đai_hai",
        division_type: "xã",
      },

      {
        id: 78,
        name: "Xã Phú Tâm",
        codename: "xa_phu_tam",
        division_type: "xã",
      },

      {
        id: 79,
        name: "Xã An Ninh",
        codename: "xa_an_ninh",
        division_type: "xã",
      },

      {
        id: 80,
        name: "Xã Thuận Hòa",
        codename: "xa_thuan_hoa",
        division_type: "xã",
      },

      {
        id: 81,
        name: "Xã Hồ Đắc Kiện",
        codename: "xa_ho_đac_kien",
        division_type: "xã",
      },

      {
        id: 82,
        name: "Xã Mỹ Tú",
        codename: "xa_my_tu",
        division_type: "xã",
      },

      {
        id: 83,
        name: "Xã Long Hưng",
        codename: "xa_long_hung",
        division_type: "xã",
      },

      {
        id: 84,
        name: "Xã Mỹ Hương",
        codename: "xa_my_huong",
        division_type: "xã",
      },

      {
        id: 85,
        name: "Xã Tân Long",
        codename: "xa_tan_long",
        division_type: "xã",
      },

      {
        id: 86,
        name: "Xã Phú Lộc",
        codename: "xa_phu_loc",
        division_type: "xã",
      },

      {
        id: 87,
        name: "Xã Vĩnh Lợi",
        codename: "xa_vinh_loi",
        division_type: "xã",
      },

      {
        id: 88,
        name: "Xã Lâm Tân",
        codename: "xa_lam_tan",
        division_type: "xã",
      },

      {
        id: 89,
        name: "Xã Thạnh Thới An",
        codename: "xa_thanh_thoi_an",
        division_type: "xã",
      },

      {
        id: 90,
        name: "Xã Tài Văn",
        codename: "xa_tai_van",
        division_type: "xã",
      },

      {
        id: 91,
        name: "Xã Liêu Tú",
        codename: "xa_lieu_tu",
        division_type: "xã",
      },

      {
        id: 92,
        name: "Xã Lịch Hội Thượng",
        codename: "xa_lich_hoi_thuong",
        division_type: "xã",
      },

      {
        id: 93,
        name: "Xã Trần Đề",
        codename: "xa_tran_đe",
        division_type: "xã",
      },

      {
        id: 94,
        name: "Xã An Thạnh",
        codename: "xa_an_thanh",
        division_type: "xã",
      },

      {
        id: 95,
        name: "Xã Cù Lao Dung",
        codename: "xa_cu_lao_dung",
        division_type: "xã",
      },

      {
        id: 96,
        name: "Phường Tân Lộc",
        codename: "phuong_tan_loc",
        division_type: "phường",
      },

      {
        id: 97,
        name: "Xã Trường Long",
        codename: "xa_truong_long",
        division_type: "xã",
      },

      {
        id: 98,
        name: "Xã Thạnh Phú",
        codename: "xa_thanh_phu",
        division_type: "xã",
      },

      {
        id: 99,
        name: "Xã Thới Hưng",
        codename: "xa_thoi_hung",
        division_type: "xã",
      },

      {
        id: 100,
        name: "Xã Phong Nẫm",
        codename: "xa_phong_nam",
        division_type: "xã",
      },

      {
        id: 101,
        name: "Xã Mỹ Phước",
        codename: "xa_my_phuoc",
        division_type: "xã",
      },

      {
        id: 102,
        name: "Xã Lai Hòa",
        codename: "xa_lai_hoa",
        division_type: "xã",
      },

      {
        id: 103,
        name: "Xã Vĩnh Hải",
        codename: "xa_vinh_hai",
        division_type: "xã",
      },
    ],
  },
  {
    id: 34,
    code: "96",
    name: "Tỉnh Cà Mau",
    codename: "tinh_ca_mau",
    division_type: "tỉnh",
    wards: [
      {
        id: 1,
        name: "Xã Tân Thuận",
        codename: "xa_tan_thuan",
        division_type: "xã",
      },

      {
        id: 2,
        name: "Xã Tân Tiến",
        codename: "xa_tan_tien",
        division_type: "xã",
      },

      {
        id: 3,
        name: "Xã Tạ An Khương",
        codename: "xa_ta_an_khuong",
        division_type: "xã",
      },

      {
        id: 4,
        name: "Xã Trần Phán",
        codename: "xa_tran_phan",
        division_type: "xã",
      },

      {
        id: 5,
        name: "Xã Thanh Tùng",
        codename: "xa_thanh_tung",
        division_type: "xã",
      },

      {
        id: 6,
        name: "Xã Đầm Dơi",
        codename: "xa_đam_doi",
        division_type: "xã",
      },

      {
        id: 7,
        name: "Xã Quách Phẩm",
        codename: "xa_quach_pham",
        division_type: "xã",
      },

      {
        id: 8,
        name: "Xã U Minh",
        codename: "xa_u_minh",
        division_type: "xã",
      },

      {
        id: 9,
        name: "Xã Nguyễn Phích",
        codename: "xa_nguyen_phich",
        division_type: "xã",
      },

      {
        id: 10,
        name: "Xã Khánh Lâm",
        codename: "xa_khanh_lam",
        division_type: "xã",
      },

      {
        id: 11,
        name: "Xã Khánh An",
        codename: "xa_khanh_an",
        division_type: "xã",
      },

      {
        id: 12,
        name: "Xã Phan Ngọc Hiển",
        codename: "xa_phan_ngoc_hien",
        division_type: "xã",
      },

      {
        id: 13,
        name: "Xã Đất Mũi",
        codename: "xa_đat_mui",
        division_type: "xã",
      },

      {
        id: 14,
        name: "Xã Tân Ân",
        codename: "xa_tan_an",
        division_type: "xã",
      },

      {
        id: 15,
        name: "Xã Khánh Bình",
        codename: "xa_khanh_binh",
        division_type: "xã",
      },

      {
        id: 16,
        name: "Xã Đá Bạc",
        codename: "xa_đa_bac",
        division_type: "xã",
      },

      {
        id: 17,
        name: "Xã Khánh Hưng",
        codename: "xa_khanh_hung",
        division_type: "xã",
      },

      {
        id: 18,
        name: "Xã Sông Đốc",
        codename: "xa_song_đoc",
        division_type: "xã",
      },

      {
        id: 19,
        name: "Xã Trần Văn Thời",
        codename: "xa_tran_van_thoi",
        division_type: "xã",
      },

      {
        id: 20,
        name: "Xã Thới Bình",
        codename: "xa_thoi_binh",
        division_type: "xã",
      },

      {
        id: 21,
        name: "Xã Trí Phải",
        codename: "xa_tri_phai",
        division_type: "xã",
      },

      {
        id: 22,
        name: "Xã Tân Lộc",
        codename: "xa_tan_loc",
        division_type: "xã",
      },

      {
        id: 23,
        name: "Xã Biển Bạch",
        codename: "xa_bien_bach",
        division_type: "xã",
      },

      {
        id: 24,
        name: "Xã Đất Mới",
        codename: "xa_đat_moi",
        division_type: "xã",
      },

      {
        id: 25,
        name: "Xã Năm Căn",
        codename: "xa_nam_can",
        division_type: "xã",
      },

      {
        id: 26,
        name: "Xã Tam Giang",
        codename: "xa_tam_giang",
        division_type: "xã",
      },

      {
        id: 27,
        name: "Xã Cái Đôi Vàm",
        codename: "xa_cai_đoi_vam",
        division_type: "xã",
      },

      {
        id: 28,
        name: "Xã Nguyễn Việt Khái",
        codename: "xa_nguyen_viet_khai",
        division_type: "xã",
      },

      {
        id: 29,
        name: "Xã Phú Tân",
        codename: "xa_phu_tan",
        division_type: "xã",
      },

      {
        id: 30,
        name: "Xã Phú Mỹ",
        codename: "xa_phu_my",
        division_type: "xã",
      },

      {
        id: 31,
        name: "Xã Lương Thế Trân",
        codename: "xa_luong_the_tran",
        division_type: "xã",
      },

      {
        id: 32,
        name: "Xã Tân Hưng",
        codename: "xa_tan_hung",
        division_type: "xã",
      },

      {
        id: 33,
        name: "Xã Hưng Mỹ",
        codename: "xa_hung_my",
        division_type: "xã",
      },

      {
        id: 34,
        name: "Xã Cái Nước",
        codename: "xa_cai_nuoc",
        division_type: "xã",
      },

      {
        id: 35,
        name: "Xã Phong Thạnh",
        codename: "xa_phong_thanh",
        division_type: "xã",
      },

      {
        id: 36,
        name: "Xã Hồng Dân",
        codename: "xa_hong_dan",
        division_type: "xã",
      },

      {
        id: 37,
        name: "Xã Vĩnh Lộc",
        codename: "xa_vinh_loc",
        division_type: "xã",
      },

      {
        id: 38,
        name: "Xã Ninh Thạnh Lợi",
        codename: "xa_ninh_thanh_loi",
        division_type: "xã",
      },

      {
        id: 39,
        name: "Xã Ninh Quới",
        codename: "xa_ninh_quoi",
        division_type: "xã",
      },

      {
        id: 40,
        name: "Xã Gành Hào",
        codename: "xa_ganh_hao",
        division_type: "xã",
      },

      {
        id: 41,
        name: "Xã Định Thành",
        codename: "xa_đinh_thanh",
        division_type: "xã",
      },

      {
        id: 42,
        name: "Xã An Trạch",
        codename: "xa_an_trach",
        division_type: "xã",
      },

      {
        id: 43,
        name: "Xã Long Điền",
        codename: "xa_long_đien",
        division_type: "xã",
      },

      {
        id: 44,
        name: "Xã Đông Hải",
        codename: "xa_đong_hai",
        division_type: "xã",
      },

      {
        id: 45,
        name: "Xã Hoà Bình",
        codename: "xa_hoa_binh",
        division_type: "xã",
      },

      {
        id: 46,
        name: "Xã Vĩnh Mỹ",
        codename: "xa_vinh_my",
        division_type: "xã",
      },

      {
        id: 47,
        name: "Xã Vĩnh Hậu",
        codename: "xa_vinh_hau",
        division_type: "xã",
      },

      {
        id: 48,
        name: "Xã Phước Long",
        codename: "xa_phuoc_long",
        division_type: "xã",
      },

      {
        id: 49,
        name: "Xã Vĩnh Phước",
        codename: "xa_vinh_phuoc",
        division_type: "xã",
      },

      {
        id: 50,
        name: "Xã Phong Hiệp",
        codename: "xa_phong_hiep",
        division_type: "xã",
      },

      {
        id: 51,
        name: "Xã Vĩnh Thanh",
        codename: "xa_vinh_thanh",
        division_type: "xã",
      },

      {
        id: 52,
        name: "Xã Vĩnh Lợi",
        codename: "xa_vinh_loi",
        division_type: "xã",
      },

      {
        id: 53,
        name: "Xã Hưng Hội",
        codename: "xa_hung_hoi",
        division_type: "xã",
      },

      {
        id: 54,
        name: "Xã Châu Thới",
        codename: "xa_chau_thoi",
        division_type: "xã",
      },

      {
        id: 55,
        name: "Phường Bạc Liêu",
        codename: "phuong_bac_lieu",
        division_type: "phường",
      },

      {
        id: 56,
        name: "Phường Vĩnh Trạch",
        codename: "phuong_vinh_trach",
        division_type: "phường",
      },

      {
        id: 57,
        name: "Phường Hiệp Thành",
        codename: "phuong_hiep_thanh",
        division_type: "phường",
      },

      {
        id: 58,
        name: "Phường Giá Rai",
        codename: "phuong_gia_rai",
        division_type: "phường",
      },

      {
        id: 59,
        name: "Phường Láng Tròn",
        codename: "phuong_lang_tron",
        division_type: "phường",
      },

      {
        id: 60,
        name: "Phường An Xuyên",
        codename: "phuong_an_xuyen",
        division_type: "phường",
      },

      {
        id: 61,
        name: "Phường Lý Văn Lâm",
        codename: "phuong_ly_van_lam",
        division_type: "phường",
      },

      {
        id: 62,
        name: "Phường Tân Thành",
        codename: "phuong_tan_thanh",
        division_type: "phường",
      },

      {
        id: 63,
        name: "Phường Hoà Thành",
        codename: "phuong_hoa_thanh",
        division_type: "phường",
      },

      {
        id: 64,
        name: "Xã Hồ Thị Kỷ",
        codename: "xa_ho_thi_ky",
        division_type: "xã",
      },
    ],
  },
];

export default provinces;
