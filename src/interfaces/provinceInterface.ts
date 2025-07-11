// Interface ward
interface Ward {
  id: number;
  name: string;
  codename: string;
  division_type: string; // Ví dụ: "Phường", "Xã", "Thị trấn"
}

// Interface province
interface Province {
  id: number;
  code: string;
  name: string;
  codename: string;
  division_type: string; // Ví dụ: "tỉnh", "thành phố trung ương"
  wards: Ward[];
}

export { Province, Ward };