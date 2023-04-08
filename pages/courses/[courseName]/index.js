import {useRouter} from "next/router";
import BaseLayout from "@/components/BaseLayout";

const Course = ({course}) => {
  const {courseName, label, desc, price} = course;

  if (courseName === 'test') {
    route.push('/404');
    return false;
  }

  return (
    <BaseLayout title={courseName}>
      <h4>{courseName}</h4>
      <h2>{label}</h2>
      <p>{desc}</p>
      <p>{price}</p>
    </BaseLayout>
  );

}

export default Course;

export async function getStaticPaths() {
  const {courseName} = await (await fetch('http://localhost:3434/course-name')).json()

  return {
    paths: courseName.map(course => {
      return {params: {courseName: course}}
    }),
    fallback: false,
  }
}

export async function getStaticProps(staticPaths) {
  const {params: {courseName}} = staticPaths;
  const course = await (await fetch('http://localhost:3434/' + courseName)).json()

  return {
    props: {
      course
    }
  };
}