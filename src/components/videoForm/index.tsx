import { Field, Formik, FormikProps, Form, FieldProps } from 'formik';
import React from 'react';
import AuthorsSelect from '../authorsSelect';
import CategoriesSelect from '../categoriesSelect';
import { VideoFormProps, VideoFormValues } from './type';
import * as Yup from 'yup';
import TextInput from '../textInput';
const videoFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  authorId: Yup.number().min(0).required(),
  catIds: Yup.array().required(),
});
const VideoForm = (props: VideoFormProps) => {
  return (
    <div>
      <Formik validateOnMount={true} validationSchema={videoFormSchema} initialValues={props.initialValues} onSubmit={props.submit}>
        {(formProps: FormikProps<VideoFormValues>) => (
          <Form>
            <div>
              <label htmlFor="name">Video name</label>
              <Field name="name" id="name">
                {({ field }: FieldProps<string>) => <TextInput {...field} />}
              </Field>
            </div>
            <div>
              <label htmlFor="author">Author</label>
              <Field name="authorId" id="authorId">
                {({ field }: FieldProps<number>) => <AuthorsSelect placeholder="Video author" {...field} />}
              </Field>
            </div>
            <div>
              <label htmlFor="catIds">Video category</label>
              <Field name="catIds" id="catIds">
                {({ field }: FieldProps<number>) => <CategoriesSelect {...field} />}
              </Field>
            </div>
            <button type="submit" disabled={!formProps.isValid}>
              Submit
            </button>
            <button onClick={props.cancel}>Cancel</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VideoForm;
