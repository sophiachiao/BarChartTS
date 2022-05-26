import * as d3 from "d3";

const randomAroundMean = (mean, deviation) =>
  mean + boxMullerRandom() * deviation;
const boxMullerRandom = () =>
  Math.sqrt(-2.0 * Math.log(Math.random())) *
  Math.cos(2.0 * Math.PI * Math.random());

const today = new Date();
const formatDate = d3.timeFormat("%m/%d/%Y");
export const getTimelineData = (length = 100) => {
  let lastTemperature = randomAroundMean(70, 20);
  const firstTemperature = d3.timeDay.offset(today, -length);

  return new Array(length).fill(0).map((d, i) => {
    lastTemperature += randomAroundMean(0, 2);
    return {
      date: formatDate(d3.timeDay.offset(firstTemperature, i)),
      temperature: lastTemperature,
    };
  });
};

export const getScatterData = (count = 100) =>
  new Array(count).fill(0).map((d, i) => ({
    temperature: randomAroundMean(70, 20),
    humidity: randomAroundMean(0.5, 0.1),
  }));

export const getCoffeeData = () => {
  return [
    {
      product: "Mint",
      sales: 8342,
    },
    {
      product: "Caffe Latte",
      sales: 8665,
    },
    {
      product: "Amaretto",
      sales: 6781,
    },
    {
      product: "Darjeeling",
      sales: 17758,
    },
    {
      product: "Decaf Espresso",
      sales: 18888,
    },
    {
      product: "Regular Espresso",
      sales: 6744,
    },
    {
      product: "Decaf Irish Cream",
      sales: 14831,
    },
    {
      product: "Colombian",
      sales: 30761,
    },
    {
      product: "Caffe Mocha",
      sales: 21716,
    },
  ];
};