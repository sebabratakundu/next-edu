import BaseLayout from "@/components/BaseLayout";
import {Button, Card, CardActions, CardContent, Stack, Typography} from "@mui/material";
import Link from "next/link";

const coursesList = [
  {
    id: 1,
    label: 'React JS',
    name: 'react',
    link: 'react',
    desc: 'React is a popular library for building UI'
  },
  {
    id: 2,
    label: 'Node JS',
    name: 'node-js',
    link: 'node-js',
    desc: 'Node JS is a popular server side language to build scalable backend'
  },
  {
    id: 3,
    label: 'Laravel',
    name: 'angular',
    link: 'angular',
    desc: 'Laravel is a popular PHP framework for building modern scalable fullstack applications'
  },
  {
    id: 4,
    label: 'React Native',
    name: 'react-native',
    link: 'react-native',
    desc: 'SQL is a database query language to communicate with relational databases'
  },
];

function CourseItem(props) {
  const {name, label, desc, link} = props.details;
  return (
    <Card sx={{width: 250}}>
      <CardContent>
        <Typography variant="h4">{label}</Typography>
        <Typography>{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="info"><Link href={{
          pathname: `/courses/${link}`,
          query: {
            label,
            name,
            desc
          }
        }}>Learn More</Link></Button>
      </CardActions>
    </Card>
  )
}

const Courses = () => {
  return (
    <BaseLayout title="Courses">
      <h1>Courses</h1>
      <Stack direction="row" spacing={5}>
        {
          coursesList.map(course => <CourseItem details={course} key={course.id} />)
        }
      </Stack>
    </BaseLayout>
  )
}

export default Courses;