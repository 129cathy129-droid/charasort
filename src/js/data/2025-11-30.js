// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-11-30";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "House M.D. ALL", key: "all" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  { name: "그레고리 하우스", img: "dot.png", opts: { series: ["all"] } },
  { name: "제임스 윌슨", img: "dot.png", opts: { series: ["all"] } },
  { name: "리사 커디", img: "dot.png", opts: { series: ["all"] } },
  { name: "에릭 포어맨", img: "dot.png", opts: { series: ["all"] } },
  { name: "앨리슨 캐머런", img: "dot.png", opts: { series: ["all"] } },
  { name: "로버트 체이스", img: "dot.png", opts: { series: ["all"] } },
  { name: "에드워드 보글러", img: "dot.png", opts: { series: ["all"] } },
  { name: "스테이시 워너", img: "dot.png", opts: { series: ["all"] } },
  { name: "마이클 트리터", img: "dot.png", opts: { series: ["all"] } }
];
