import { Field, Formik, FormikProps, Form, FieldProps } from 'formik';
import React from 'react';
import AuthorsSelect from '../authorsSelect';
import CategoriesSelect from '../categoriesSelect';
import { VideoFormProps, VideoFormValues } from './type';
import * as Yup from 'yup';
import TextInput from '../textInput';
import styles from './video-form.module.css';
import Button from '../button';
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
            <div className={styles.inputRow}>
              <label htmlFor="name">Video name</label>
              <Field name="name" id="name">
                {({ field }: FieldProps<string>) => <TextInput {...field} />}
              </Field>
            </div>
            <div className={styles.inputRow}>
              <label htmlFor="author">Author</label>
              <Field name="authorId" id="authorId">
                {({ field }: FieldProps<number>) => <AuthorsSelect placeholder="Video author" {...field} />}
              </Field>
            </div>
            <div className={styles.inputRow}>
              <label htmlFor="catIds">Video category</label>
              <Field name="catIds" id="catIds">
                {({ field }: FieldProps<number>) => <CategoriesSelect {...field} />}
              </Field>
            </div>
            <div className={styles.buttonsRow}>
              <div className={styles.buttonsOffset}></div>
              <div className={styles.buttonsCol}>
                <Button buttonType={"focused"} type="submit" disabled={!formProps.isValid}>
                  Submit
                </Button>
                <Button onClick={props.cancel}>Cancel</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default VideoForm;
