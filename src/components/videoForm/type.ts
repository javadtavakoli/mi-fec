export type VideoFormValues = {
  name: string;
  authorId: number;
  catIds: number[];
};
export type VideoFormProps = {
  submit: (values: VideoFormValues) => void;
  cancel: () => void;
  initialValues: VideoFormValues;
};
