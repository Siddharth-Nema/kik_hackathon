"use server";

import { courseData } from "./data";

export const getCourseDetails = (formData: FormData) => {
  const courseId = formData.get("courseId");
  const course: { [key: string]: any } = courseData;

  return course[String(courseId)];
};
