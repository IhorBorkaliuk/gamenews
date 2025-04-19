import { TextArea, SubmitButton, FormContainer } from './FormStyled';
export const ReviewForm = () => {

      const { login } = JSON.parse(localStorage.getItem('data') || {});

  return (
      <div>
              <FormContainer>
                <form>
                  <p>
                      <b>{login}</b>
                  </p>
                  <TextArea placeholder='Write your review here...'/>
                  <SubmitButton type="submit">Відправити</SubmitButton>
                </form>
              </FormContainer>
    </div>
  )
}
