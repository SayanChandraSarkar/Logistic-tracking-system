import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// -----------------------------------------------

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

export default function FormProvider({ children, onSubmit, methods, ...rest }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit} {...rest}>{children}</form>
    </Form>
  );
}
