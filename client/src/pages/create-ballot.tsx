import { CreatePostInput } from "@/generated/graphql"
import { useCreatePostMutation } from "@/generated/graphql"
import { useCheckAuth } from "@/utils/useCheckAuth"
import { EnvelopeIcon, KeyIcon } from "@heroicons/react/20/solid"
import InputField from "components/InputField"
import Sidebar from "components/Sidebar"
import { Formik, Form } from "formik"
import router from "next/router"

const createBallot = () => {
  const { data: authData, loading: authLoading } = useCheckAuth()

  const initialValues = {title: '', text: ''}

  const [createPost, _] = useCreatePostMutation()

  const onCreatePostSubmit  = async (values: CreatePostInput) => {
    await createPost({
      variables: {createPostInput: values},
      update(cache, {data}) {
        cache.modify({
          fields: {
            posts(existing) {
              console.log('Existing', existing)
              
              if(data?.createPost.success && data.createPost.post) {
                const newPostRef = cache.identify(data.createPost.post)
                console.log('New ballot ref', newPostRef)
                const newPostAfterCreation = {
                  ...existing,
                  totalCount: existing.totalCount + 1,
                  paginatedPosts: [
                    {__ref: newPostRef},
                    ...existing.paginatedPosts
                  ]
                }
                console.log('New ballot after creation', newPostAfterCreation)
                return newPostAfterCreation
              }
            }
          }
        })
      }
    })
    router.push('/')
  }

    return (
      <div className='bg-gray-100 h-screen overflow-hidden'>
        <Sidebar/>
        <div className="flex flex-col items-center">
            <Formik initialValues={initialValues} onSubmit={onCreatePostSubmit}>
                {
                    ({ isSubmitting }) => (
                    <Form>
                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                            <EnvelopeIcon className="text-gray-400 w-6" />
                            <InputField name='title' placeholder="Title" label='Title' type='text'/>    
                        </div>
                        <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                            <KeyIcon className="text-gray-400 w-6" />
                            <InputField name='text' placeholder="Text" label='Text' type='text'/>     
                        </div>
                        <input type="submit" value="Create Vote" className='border-2 mt-3 border-blue text-blue rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-400'/>
                    </Form>
                )}
            </Formik>
        </div>
      </div>
    )
}

export default createBallot