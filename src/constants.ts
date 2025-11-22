import { Profile, Project, Skill } from './types';

export const PROFILE: Profile = {
  name: "Trần Trọng Tú",
  title: "Java Developer",
  about: "Lập trình viên đam mê xây dựng các hệ thống backend mạnh mẽ, có khả năng mở rộng với Java và Spring Boot ecosystem. Tôi yêu thích việc tối ưu hóa hiệu suất và giải quyết các bài toán nghiệp vụ phức tạp.",
  location: "Bắc Từ Liêm - Hà Nội, Việt Nam",
  email: "trantrongtucntt3@gmail.com",
  github: "https://github.com/TranTrongTu-2710",
  linkedin: "https://linkedin.com"
};

export const PROJECTS: Project[] = [
  {
    id: 0,
    title: "Cinema Booking App",
    role: "Mobile & Backend Dev",
    description: "Ứng dụng đặt vé xem phim trên thiết bị di động. Người dùng có thể xem thông tin phim, chọn suất chiếu, chọn ghế ngồi theo thời gian thực và thanh toán. Hệ thống backend xử lý đặt vé đồng thời và quản lý lịch chiếu.",
    techStack: ["Java Android", "Spring Boot", "JWT", "mongodb"],
    images: [
      "./anh1.png", 
      "./anh2.png", 
      "./anh3.png", 
      "./anh4.png", 
    ],
    demoUrl: "",
    repoUrl: "https://github.com/TranTrongTu-2710/cinema_phat_trien_ung_dung_di_dong"
  },
  {
    id: 1,
    title: "E-Commerce Microservices",
    role: "Backend Developer",
    description: "Hệ thống thương mại điện tử dựa trên kiến trúc Microservices. Xử lý đặt hàng, thanh toán, và quản lý kho vận",
    techStack: ["Java 17", "Spring Boot", "MySQL"],
    images: ["./anh5.png", "./image.png"],
    demoUrl: "#",
    repoUrl: "https://github.com/TranTrongTu-2710/shop-app"
  }
];

export const SKILLS: Skill[] = [
  { name: "Java Core", category: "backend", icon: "Cpu", level: 95 },
  { name: "Spring Boot", category: "backend", icon: "Leaf", level: 90 },
  { name: "Hibernate/JPA", category: "backend", icon: "Database", level: 88 },
  { name: "MySQL ", category: "database", icon: "Database", level: 85 },
  { name: "MongoDB ", category: "database", icon: "Database", level: 65 },
  { name: "Git / CI/CD", category: "tools", icon: "GitBranch", level: 82 },
  { name: "HTML, CSS", category: "frontend", icon: "Cpu", level: 85 },
  { name: "Bootstrap", category: "frontend", icon: "Cpu", level: 85 },
  { name: "ReactJS", category: "frontend", icon: "Code", level: 70 },
];