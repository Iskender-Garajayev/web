import {
  IoHomeOutline,
  IoReaderOutline,
  IoPeopleOutline,
  IoTodayOutline,
  IoStatsChartOutline,
  IoCashOutline,
  IoLogoUsd,
} from 'react-icons/io5'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'

// Sidebar Data 

export const SidebarData = [
  {
    icon: IoHomeOutline,
    heading: 'Dashboard',
  },
  {
    icon: IoReaderOutline,
    heading: 'Orders',
  },
  {
    icon: IoPeopleOutline,
    heading: 'Customers',
  },
  {
    icon: IoTodayOutline,
    heading: 'Products',
  },
  {
    icon: IoStatsChartOutline,
    heading: 'Status',
  },
]

export const CardData=[
  {
    title: 'Sales' ,
    color: {
      backGround:'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5'
    },
    barValue: 70 ,
    value: '24,530' ,
    png: IoLogoUsd,
    series: [{
      name: 'Sales',
      data: [33, 40, 29, 53, 41, 115, 101]
    }] ,
  },

  {
    title: 'Revenue' ,
    color: {
      backGround:'linear-gradient(180deg, #ff919d 0%, #fc929d 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7'
    },
    barValue: 87 ,
    value: '16,910' ,
    png:IoCashOutline ,
    series: [{
      name: 'Revenue',
      data: [10, 100, 40, 70, 80, 40, 60]
    }] ,
  },
  {
    title: 'Expencses' ,
    color: {
      backGround:'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)',
      boxShadow: "0px 10px 20px 0px #F9D59B"
    },
    barValue: 60 ,
    value:'5,360',
    png: IoReaderOutline,
    series:[{
      name: 'Expencses',
      data: [10, 25, 15, 30, 11, 15, 20]
    }  ],
  },
]

export const updatesData =[
  {
    img: img1,
    name: 'Bobbi G. Merritt',
    notis: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    time: '1 minutes ago'
  },
  {
    img: img2,
    name: 'Nancy Hook',
    notis: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    time: '25 minutes ago'
  },
  {
    img: img3,
    name: 'David Alexander',
    notis: 'Lorem, ipsum dolor sit amet consectetur adipisicing.' ,
    time: '1 hour ago'
  }
]