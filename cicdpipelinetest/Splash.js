class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
    }, 30000); 
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./splash.png')} style={styles.image} />
      </View>
    );
  }
}
