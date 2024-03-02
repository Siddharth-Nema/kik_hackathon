"use server";

import { User } from "@prisma/client";
import { db } from "~/server/db";
import { courseData } from "./data";

export const UpdateUser = (user: User) => {
  return db.user.update({
    where: { id: user.id },
    data: {
      ...user,
    },
  });
};

export const getCourseDetails = (formData: FormData) => {
  const courseId = formData.get("courseId");
  const course: { [key: string]: any } = courseData;
  console.log(courseId, course[String(courseId)]);
  return course[String(courseId)];
};
