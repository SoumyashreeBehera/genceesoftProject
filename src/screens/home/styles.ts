import {StyleSheet} from 'react-native';

const useStyles = () => {
  return {
    conatiner: StyleSheet.create({
      conatiner: {
        flex: 1,
        gap: 15,
      },
      header: {
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 500,
      },
      bodyContainer: {
        paddingHorizontal: 10,
        gap: 10,
      },
      inputContainer: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      },
      inputBox: {
        flex: 1,
      },
      clearBox: {
        paddingHorizontal: 10,
        paddingVertical: 7,
      },
      dataContainer: {
        gap: 5,
      },
      cityContainer: {
        alignItems: 'center',
        backgroundColor: '#568783',
        borderRadius: 7,
        padding: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 7,
      },
      rowText: {
        fontSize: 18,
        fontWeight: 400,
      },
      selectContainer: {
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectBox: {
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderWidth: 1,
        borderRadius: 7,
      },
      itemContainer: {
        paddingVertical: 10,
        gap: 7,
      },
    }),
  };
};

export default useStyles;
