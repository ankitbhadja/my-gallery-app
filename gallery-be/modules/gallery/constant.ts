export const userList = [
  {
    name: "Ankit",
    passwordEnvVar: "GALLERY_ANKIT_PASSWORD",
    permission: {
      s3: [
        "test",
        "Marriage/Vidhi/Mandap",
        "Marriage/Vidhi/Marriage",
        "Marriage/jal",
        "Marriage/personal",
        "Marriage/family",
      ],
      folders: [
        {
          name: "Mandap",
          thumbURL:
            "https://images.pexels.com/photos/12718210/pexels-photo-12718210.jpeg?auto=compress&cs=tinysrgb&w=1200",
          location: "Marriage/Vidhi/Mandap",
        },
        {
          name: "Marriage",
          thumbURL:
            "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1200",
          location: "Marriage/Vidhi/Marriage",
        },
        {
          name: "Jal",
          thumbURL:
            "https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
          location: "",
        },
        {
          name: "Family",
          thumbURL:
            "https://images.pexels.com/photos/1914984/pexels-photo-1914984.jpeg?auto=compress&cs=tinysrgb&w=1200",
          location: "",
        },
      ],
    },
  },
  {
    name: "marriage_guest",
    passwordEnvVar: "GALLERY_GUEST_PASSWORD",
    permission: {
      s3: [
        "test",
        "Marriage/Vidhi/Mandap",
        "Marriage/Vidhi/Marriage",
        "Marriage/jal",
      ],
      folders: [
        {
          name: "Mandap",
          thumbURL:
            "https://images.pexels.com/photos/12718210/pexels-photo-12718210.jpeg?auto=compress&cs=tinysrgb&w=1200",
          location: "Marriage/Vidhi/Mandap",
        },
        {
          name: "Marriage",
          thumbURL:
            "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1200",
          location: "Marriage/Vidhi/Marriage",
        },
        {
          name: "Jal",
          thumbURL:
            "https://images.pexels.com/photos/17834/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
          location: "",
        },
      ],
    },
  },
];
