const characters = [
    { name: '������', health: 10 },
    { name: '���', health: 100 },
    { name: '���', health: 0 },
    { name: '������', health: 0 },
];

const alive = characters.filter(item => item.health > 0);