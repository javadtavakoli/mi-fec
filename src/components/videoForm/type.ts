export type VideoFormValues = {
  name: string;
  authorId: number;
  catIds: number[];
};
export type VideoFormProps = {
  submit: (values: VideoFormValues) => void;
  initialValues: VideoFormValues;
};
