import React, { Fragment, FunctionComponent } from 'react';
import {
  ScrollView as BaseScrollView,
  ScrollViewProps as BaseScrollViewProps,
  StyleSheet,
} from 'react-native';

interface ScrollViewProps extends BaseScrollViewProps {
  forwardedRef?: React.Ref<BaseScrollView>;
}

export const ScrollView: FunctionComponent<ScrollViewProps> = ({
  forwardedRef,
  children,
  ...props
}) => (
  <BaseScrollView
    ref={forwardedRef}
    centerContent
    contentContainerStyle={styles.scrollView}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    {...props}
  >
    <Fragment>{children}</Fragment>
  </BaseScrollView>
);

export const ScrollViewRef = React.forwardRef(
  (props: BaseScrollViewProps, ref?: React.Ref<BaseScrollView>) => (
    <ScrollView forwardedRef={ref} {...props} />
  ),
);

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
});

ScrollView.defaultProps = {
  keyboardDismissMode: 'none',
};

export { BaseScrollView };
export type { BaseScrollViewProps };
