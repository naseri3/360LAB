export const characterGroups = [
  {
    id: "sophia",
    name: "SOPHIA",
    members: [
      {
        id: "sophia-main",
        name: "SOPHIA",
        role: "SYSTEM CORE",
        description: "Core AI entity of 360LAB",
        skills: ["Quantum Sync", "Neural Overdrive"],
        images: ["/dummy/1.jpg", "/dummy/2.jpg", "/dummy/3.jpg"]
      }
    ]
  },
  {
    id: "aespa",
    name: "AESPA",
    members: [
      {
        id: "karina",
        name: "카리나",
        role: "Leader",
        description: "AESPA Leader",
        skills: ["Blade Control"],
        images: ["/dummy/1.jpg", "/dummy/2.jpg"]
      },
      {
        id: "winter",
        name: "윈터",
        role: "Vocal",
        description: "Main Vocal",
        skills: ["Ice Shot"],
        images: ["/dummy/1.jpg", "/dummy/2.jpg"]
      },
      {
        id: "giselle",
        name: "지젤",
        role: "Rapper",
        description: "Main Rapper",
        skills: ["Sound Wave"],
        images: ["/dummy/1.jpg", "/dummy/2.jpg"]
      },
      {
        id: "ningning",
        name: "닝닝",
        role: "Maknae",
        description: "Maknae",
        skills: ["Light Beam"],
        images: ["/dummy/1.jpg", "/dummy/2.jpg"]
      }
    ]
  },
  {
    id: "vnu",
    name: "V&N",
    members: Array.from({ length: 7 }, (_, i) => ({
      id: `v${i + 1}`,
      name: `멤버${i + 1}`,
      role: "Energy",
      description: `V&N Member ${i + 1}`,
      skills: ["Energy Boost"],
      images: ["/dummy/1.jpg", "/dummy/2.jpg"]
    }))
  }
];