"use server"

import { connectToDB } from "../utils";
import { News } from "../models/news";
import { endOfDay, endOfMonth, startOfDay, startOfMonth } from "date-fns";

export const newsCount = async () => {
  try {
    connectToDB();
    const totalNewsCount = await News.countDocuments();
    return totalNewsCount;
  } catch (err) {
    console.log(err);
  }
};

export const newsCountToday = async () => {
  try {
    connectToDB();
    const today = new Date();
    const startOfToday = startOfDay(today);
    const endOfToday = endOfDay(today);

    const totalNewsToday = await News.countDocuments({
      scraping_date: { $gte: startOfToday, $lt: endOfToday }
    });
    // const totalNewsToday = await News.countDocuments();
    return totalNewsToday;
  } catch (err) {
    console.log(err);
  }
};

export const newsCountThisMonth = async () => {
  try {
    connectToDB();
    const today = new Date();
    const startOfThisMonth = startOfMonth(today);
    const endOfThisMonth = endOfMonth(today);

    const newsThisMonth = await News.countDocuments({
      scraping_date: { $gte: startOfThisMonth, $lt: endOfThisMonth },
    });
    return newsThisMonth;
  } catch (err) {
    console.log(err);
  }
};

export const countbySource = async () => {
  try {
    const aggregationResult = await News.aggregate([
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = aggregationResult.map((result) => ({
      source: result._id,
      count: result.count,
    }));

    // return aggregationResult;
    return transformedResult;
  } catch (error) {
    console.error('Error:', error);
  }
}

export const countbyTopic = async () => {
  try {
    const aggregationResult = await News.aggregate([
      {
        $group: {
          _id: "$keyword",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = aggregationResult.map((result) => ({
      source: result._id,
      count: result.count,
    }));

    // return aggregationResult;
    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const countInstanceNegativeCentiment = async () => {
  try {
    const aggregationResult = await News.aggregate([
      {
        $match: { sentiment: "NEGATIVE" }
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = aggregationResult.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    // return aggregationResult;
    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const countInstancePositiveCentiment = async () => {
  try {
    const aggregationResult = await News.aggregate([
      {
        $match: { sentiment: "POSITIVE" },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = aggregationResult.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    // return aggregationResult;
    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getNegativeSentimentCountByInstanceToday = async () => {
  try {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "NEGATIVE",
          scraping_date: { $gte: startOfDay },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Fungsi untuk menghitung nilai "negative" untuk minggu ini
export const getNegativeSentimentCountByInstanceThisWeek = async () => {
  try {
    const today = new Date();
    const startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay()
    );

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "NEGATIVE",
          scraping_date: { $gte: startOfWeek },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Fungsi untuk menghitung nilai "negative" untuk bulan ini
export const getNegativeSentimentCountByInstanceThisMonth = async () => {
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "NEGATIVE",
          scraping_date: { $gte: startOfMonth },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const getPositiveSentimentCountByInstanceToday = async () => {
  try {
    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "POSITIVE",
          scraping_date: { $gte: startOfDay },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

// Fungsi untuk menghitung nilai "negative" untuk minggu ini
export const getPositiveSentimentCountByInstanceThisWeek = async () => {
  try {
    const today = new Date();
    const startOfWeek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - today.getDay()
    );

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "POSITIVE",
          scraping_date: { $gte: startOfWeek },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const getPositiveSentimentCountByInstanceThisMonth = async () => {
  try {
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const results = await News.aggregate([
      {
        $match: {
          sentiment: "POSITIVE",
          scraping_date: { $gte: startOfMonth },
        },
      },
      {
        $group: {
          _id: "$instance",
          count: { $sum: 1 },
        },
      },
    ]);

    const transformedResult = results.map((result) => ({
      instance: result._id,
      count: result.count,
    }));

    return transformedResult;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

