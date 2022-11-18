import * as Yup from 'yup';

export const CreateIssueSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
});
