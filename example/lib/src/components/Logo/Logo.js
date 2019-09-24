import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./Logo.style";

const Logo = props => {
  const { logoText, logoComponent } = props;
  return (
    <View style={styles.container}>
      {logoComponent || (
        <View style={styles.row}>
          <Text style={styles.textStyle}>{logoText}</Text>
          <View style={styles.iconStyle}>
            <Icon
              name="github"
              type="AntDesign"
              size={30}
              color="white"
              {...props}
            />
          </View>
        </View>
      )}
    </View>
  );
};

Logo.propTypes = {
  logoText: PropTypes.string
};

Logo.defaultProps = {
  logoText: "GITHUB"
};

export default Logo;
