"use server"

import Card from "../ui/dashboard/card/card";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import styles from "../ui/dashboard/dashboard.module.css"
// import Transactions from "../ui/dashboard/transactions/transactions"
import { countInstanceNegativeCentiment, countInstancePositiveCentiment, countbySource, countbyTopic, getNegativeSentimentCountByInstanceThisMonth, getNegativeSentimentCountByInstanceThisWeek, getNegativeSentimentCountByInstanceToday, getPositiveSentimentCountByInstanceThisMonth, getPositiveSentimentCountByInstanceThisWeek, getPositiveSentimentCountByInstanceToday, newsCount, newsCountThisMonth, newsCountToday } from "@/app/lib/datas/news";
import { TinyBarChart } from "../ui/dashboard/chart/chart";
import { MdCalendarMonth, MdCalendarToday, MdOutlineRestore } from "react-icons/md";

const Dashboard = async () => {
    const newsToday = await newsCountToday();
    const totalNews = await newsCount();
    const newsThisMonth = await newsCountThisMonth();

    const sourceCount = await countbySource()
    const topicCount = await countbyTopic()
    console.log("Source: ", sourceCount)
    console.log("Topic: ", topicCount)
    
    const instancePositiveSentimentCount = await countInstancePositiveCentiment();
    const thisMonthMostPositive = await getPositiveSentimentCountByInstanceThisMonth()
    const thisWeekMostPositive = await getPositiveSentimentCountByInstanceThisWeek()
    const TodayMostPositive = await getPositiveSentimentCountByInstanceToday();
    const mostPositiveInstace = [instancePositiveSentimentCount, thisMonthMostPositive, thisWeekMostPositive, TodayMostPositive];

    const instanceNegativeSentimentCount = await countInstanceNegativeCentiment();
    const thisMonthMostNegative = await getNegativeSentimentCountByInstanceThisMonth()
    const thisWeekMostNegative = await getNegativeSentimentCountByInstanceThisWeek()
    const TodayMostNegative = await getNegativeSentimentCountByInstanceToday();
    const mostNegativeInstace = [instanceNegativeSentimentCount, thisMonthMostNegative, thisWeekMostNegative, TodayMostNegative];

    const periodOptions = [
        {value: 0, text: 'All'},
        {value: 1, text: 'This Month'},
        {value: 2, text: 'This Week'},
        {value: 3, text: 'Today'},
    ];

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.row}>
                    <Card head="Todays News" count={newsToday} desc="Jumlah berita di-scraping Hari Ini" icon={<MdCalendarToday size={38} color="#2e3743" />} />
                    <Card head="This Month News" count={newsThisMonth} desc="Jumlah berita di-scraping dalam bulan Ini" icon={<MdCalendarMonth size={38} color="#2e3743" />} />
                    <Card head="Total News" count={totalNews}  desc="Jumlah berita di-scraping keseluruhan" icon={<MdOutlineRestore size={38} color="#2e3743" />} />
                </div>
                <div className={styles.row}>
                    <TinyBarChart datas={[sourceCount]} title="News Portal on Spotlight" dataKey="source" />
                    <TinyBarChart datas={[topicCount]} title="Topics on Spotlight"  dataKey="source" />
                </div>
                <div className={styles.row}>
                    <TinyBarChart opt={periodOptions} data={instancePositiveSentimentCount} title="Most Positive Instance"  dataKey="instance" datas={mostPositiveInstace}/>
                    <TinyBarChart opt={periodOptions} data={instanceNegativeSentimentCount} title="Most Negative Instance"  dataKey="instance" datas={mostNegativeInstace}/>
                </div>
                {/* <div className={styles.row}>
                    <Transactions />
                </div> */}
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
        );  
};

export default Dashboard;