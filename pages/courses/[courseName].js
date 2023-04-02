import {useRouter} from "next/router";
import BaseLayout from "@/components/BaseLayout";

const Course = () => {
  const route = useRouter();
  const {courseName} = route.query;
  console.log(route);

  return (
    <BaseLayout title={courseName}>
      <h2>{courseName}</h2>
    </BaseLayout>
  )

}

export default Course;