const users = [
  {
    id: 1,
    firstName: "Harriette",
    userName: "hgordongiles0",
  },
  {
    id: 2,
    firstName: "Dasya",
    userName: "dmemory1",
  },
  {
    id: 3,
    firstName: "Victor",
    userName: "vbaggs2",
  },
  {
    id: 4,
    firstName: "Tonie",
    userName: "tyukhtin3",
  },
  {
    id: 5,
    firstName: "Ulick",
    userName: "rartingstall4",
  },
  {
    id: 6,
    firstName: "Stearn",
    userName: "sbernardin5",
  },
  {
    id: 7,
    firstName: "Lethia",
    userName: "lfawthorpe6",
  },
  {
    id: 8,
    firstName: "Lucas",
    userName: "lmattielli7",
  },
  {
    id: 9,
    firstName: "Stefania",
    userName: "smatyugin8",
  },
  {
    id: 10,
    firstName: "Mona",
    userName: "mhaill9",
  },
  {
    id: 11,
    firstName: "Maddie",
    userName: "mlyffea",
  },
  {
    id: 12,
    firstName: "Tonie",
    userName: "smillinb",
  },
  {
    id: 13,
    firstName: "Austina",
    userName: "ahookc",
  },
  {
    id: 14,
    firstName: "Tonie",
    userName: "ecriselld",
  },
  {
    id: 15,
    firstName: "Nanci",
    userName: "ncloutte",
  },
  {
    id: 16,
    firstName: "Rosalie",
    userName: "ranersenf",
  },
  {
    id: 17,
    firstName: "Ulick",
    userName: "hmckelvieg",
  },
  {
    id: 18,
    firstName: "Quinta",
    userName: "qduffellh",
  },
  {
    id: 19,
    firstName: "Rayshell",
    userName: "rdelphi",
  },
  {
    id: 20,
    firstName: "Shalne",
    userName: "slandmanj",
  },
  {
    id: 21,
    firstName: "Ulick",
    userName: "psollask",
  },
  {
    id: 22,
    firstName: "Ulick",
    userName: "uburfordl",
  },
  {
    id: 23,
    firstName: "Tonie",
    userName: "cyerburym",
  },
  {
    id: 24,
    firstName: "Ulick",
    userName: "vmarkwelln",
  },
  {
    id: 25,
    firstName: "Worden",
    userName: "wdeanso",
  },
  {
    id: 26,
    firstName: "Darda",
    userName: "djowersp",
  },
  {
    id: 27,
    firstName: "Deanne",
    userName: "dposselowq",
  },
  {
    id: 28,
    firstName: "Wendy",
    userName: "wdehoochr",
  },
  {
    id: 29,
    firstName: "Marian",
    userName: "mdawids",
  },
  {
    id: 30,
    firstName: "Ange",
    userName: "aarboint",
  },
  {
    id: 31,
    firstName: "Weber",
    userName: "wchomickiu",
  },
  {
    id: 32,
    firstName: "Saba",
    userName: "skimbellv",
  },
  {
    id: 33,
    firstName: "Merrilee",
    userName: "mpercifullw",
  },
  {
    id: 34,
    firstName: "Barclay",
    userName: "bhicksx",
  },
  {
    id: 35,
    firstName: "Bea",
    userName: "bcrimpey",
  },
  {
    id: 36,
    firstName: "Gay",
    userName: "gphilippz",
  },
  {
    id: 37,
    firstName: "Patton",
    userName: "ghousen10",
  },
  {
    id: 38,
    firstName: "Ulick",
    userName: "dsywell11",
  },
  {
    id: 39,
    firstName: "Farica",
    userName: "fveryan12",
  },
  {
    id: 40,
    firstName: "Barbara",
    userName: "bdevenny13",
  },
  {
    id: 41,
    firstName: "Vonni",
    userName: "vjolland14",
  },
  {
    id: 42,
    firstName: "Alberik",
    userName: "araincin15",
  },
  {
    id: 43,
    firstName: "Bea",
    userName: "mhansberry16",
  },
  {
    id: 44,
    firstName: "Bea",
    userName: "civshin17",
  },
  {
    id: 45,
    firstName: "Bea",
    userName: "abeggin18",
  },
  {
    id: 46,
    firstName: "Ida",
    userName: "irawlingson19",
  },
  {
    id: 47,
    firstName: "Kylynn",
    userName: "kboller1a",
  },
  {
    id: 48,
    firstName: "Patton",
    userName: "plaxston1b",
  },
  {
    id: 49,
    firstName: "Tatiania",
    userName: "thuggett1c",
  },
  {
    id: 50,
    firstName: "Bea",
    userName: "rwarrillow1d",
  },
];

const addOld = (array, field) =>
  array
    .map((item) =>
      item.firstName.length > 7
        ? Object.assign(item, { tooOld: true })
        : Object.assign(item, { tooYoung: true })
    )
    .sort((a, b) => a[field].localeCompare(b[field]));

console.log(addOld(users, "firstName"));
