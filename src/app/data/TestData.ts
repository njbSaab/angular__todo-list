import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import {Task} from "../model/Task";

export class TestData{
  static categories: Category[] = [
    {id: 1, title: 'Job'},
    {id: 2, title: 'Rest'},
    {id: 3, title: 'Family'},
    {id: 4, title: 'Hobie'},
    {id: 5, title: 'Dream'},
    {id: 6, title: 'Sport'},
    {id: 7, title: 'Reading'},
  ];

  static priorities: Priority[] = [
    {id: 1,title: 'low', color: '#e5e5e5'},
    {id: 2,title: 'midl', color: '#85d1b2'},
    {id: 3,title: 'high', color: '#f1828D'},
    {id: 4,title: 'highest', color: '#f1128d'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: "morning run",
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[5],
      date: new Date('2023-04-10')
    },
    {
      id:2,
      title:"fifty call",
      priority: TestData.priorities[1],
      completed:false,
      category: TestData.categories[0],
      date: new Date('2023-04-11')
    },
    {
      id:3,
      title:'learn Angular',
      priority: TestData.priorities[3],
      completed:true,
      category: TestData.categories[5],
      date: new Date('2023-04-10')
    },
    {
      id:4,
      title:'go to nature',
      priority: TestData.priorities[0],
      completed: false,
      category:TestData.categories[2],
      date: new Date('2023-04-16')
    },
    {
      id:5,
      title:'go to restaurant with girlfriend',
      priority: TestData.priorities[0],
      completed: false,
    },
    {
      id:6,
      title:'children game place',
      priority: TestData.priorities[3],
      completed: false,
    },
    {
      id:7,
      title:'make car video review for youtube',
      completed: false,
      category:TestData.categories[2],
    },
    {
      id:8,
      title:'go to bich',
      priority: TestData.priorities[3],
      completed: false,
      date: new Date('2023-06-01')
    },
  ]

}
