import React from "react";
import {
  Text,
  View,
  StatusBar,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header, Tile, SearchBar, Card, Divider } from "react-native-elements";

const resizeComponent = (value, percentage) => {
  return value - value * (percentage / 100);
};

const Window = {
  Height: Dimensions.get("window").height,
  Width: Dimensions.get("window").width,
};
const cardContainerSize = {
  Height: resizeComponent(300, 5),
  Width: resizeComponent(Window.Width, 50),
};

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{ backgroundColor: "green" }}
          leftComponent={{
            icon: "shopping-cart",
            color: "black",
            onPress: () => this.props.navigation.navigate("Cartpage"),
          }}
          centerComponent={{
            text: "Organify",
            style: { color: "white", fontSize: 20 },
          }}
          rightComponent={{
            icon: "notifications-active",
            color: "black",
            onPress: () => this.props.navigation.navigate("Admin"),
          }}
        />
        <ScrollView>
          <View>
            <View>
              <StatusBar barStyle="light-content" />
            </View>
            <View>
              <Text
                heading
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginLeft: 15,
                  color: "green",
                }}
              >
                Welcome, Rakha!
              </Text>
              <Text
                heading2
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginLeft: 15,
                  color: "green",
                }}
              >
                {" "}
                Mau order apa hari ini?
              </Text>
              <SearchBar
                containerStyle={styles.searchbar}
                placeholder="Cari sayur..."
                platform="ios"
                round
                onChangeText={this.updateSearch}
                value={search}
              />
            </View>
            <Card>
              <ScrollView horizontal={true}>
                <Tile
                  containerStyle={styles.cardstyle}
                  title="Sayur"
                  titleStyle={{ fontSize: 20, fontWeight: "bold" }}
                  onPress={() => this.props.navigation.navigate("Productpage")}
                ></Tile>
                <Tile
                  containerStyle={styles.cardstyle}
                  title="Buah"
                  titleStyle={{ fontSize: 20, fontWeight: "bold" }}
                >
                  {/* <Text style={styles.cardtext}>
                            Dapatkan buah - buahan organik segar disini
                        </Text> */}
                </Tile>
                <Tile
                  containerStyle={styles.cardstyle}
                  title="Daging"
                  titleStyle={{ fontSize: 20, fontWeight: "bold" }}
                >
                  {/* <Text style={styles.cardtext}>
                            Dapatkan daging sapi, ayam, dan ikan disini
                        </Text> */}
                </Tile>
              </ScrollView>
            </Card>
            <Divider style={{ backgroundColor: "green" }} />
            <TouchableOpacity
              style={{ left: 290 }}
              onPress={() => this.props.navigation.navigate("Productpage")}
            >
              <Text style={{ fontWeight: "bold", color: "green" }}>
                Lihat semua produk
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                marginLeft: 15,
                color: "green",
              }}
            >
              Produk Terlaris
            </Text>
            <Card
              title="Sayur"
              titleStyle={{ textAlign: "left", color: "green" }}
            >
              <ScrollView
                horizontal={true}
                containerStyle={styles.productcardContainer}
              >
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Image
                        style={{ height: 15, width: 15 }}
                        source={require("../assets/toko.jpg")}
                      />
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
              </ScrollView>
            </Card>
            <Card
              title="Buah"
              titleStyle={{ textAlign: "left", color: "green" }}
            >
              <ScrollView
                horizontal={true}
                containerStyle={styles.productcardContainer}
              >
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
              </ScrollView>
            </Card>
            <Card
              title="Daging"
              titleStyle={{ textAlign: "left", color: "green" }}
            >
              <ScrollView
                horizontal={true}
                containerStyle={styles.productcardContainer}
              >
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
                <Tile
                  containerStyle={styles.productcard}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetailpage")
                  }
                >
                  <Text style={styles.cardtext}>Brokoli</Text>
                  <View style={styles.priceContainer}>
                    <View
                      style={{
                        position: "absolute",
                        bottom: 2,
                        left: -80,
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: "bold",
                          marginLeft: 5,
                        }}
                      >
                        Toko Baru
                      </Text>
                    </View>
                    <Text style={styles.price}>Rp 15.000.00</Text>
                  </View>
                </Tile>
              </ScrollView>
            </Card>
            {/* <Card title="Sumber Zat Besi Alami!" titleStyle={{textAlign:'left', color:'green'}}>
                <Tile
                    containerStyle={styles.headingtile} 
                    imageSrc={require('../assets/headingtile1.png')}>
                    </Tile>
                <ScrollView horizontal={true}  containerStyle={styles.productcardContainer}>
                    <Tile 
                    containerStyle={styles.productcard}
                    imageSrc={require('../assets/brokoli.jpg')}
                    onPress={() => this.props.navigation.navigate('Productdetailpage')}>
                        <Text style={styles.cardtext}>Brokoli</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Rp 15.000.00</Text>
                        </View>
                    </Tile>
                    <Tile 
                    containerStyle={styles.productcard}
                    imageSrc={require('../assets/brokoli.jpg')}
                    onPress={() => this.props.navigation.navigate('Productdetailpage')}>
                        <Text style={styles.cardtext}>Brokoli</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Rp 15.000.00</Text>
                        </View>
                    </Tile>
                    <Tile 
                    containerStyle={styles.productcard}
                    imageSrc={require('../assets/brokoli.jpg')}
                    onPress={() => this.props.navigation.navigate('Productdetailpage')}>
                        <Text style={styles.cardtext}>Brokoli</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>Rp 15.000.00</Text>
                        </View>
                    </Tile>
                </ScrollView>
                </Card> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardstyle: {
    backgroundColor: "white",
    flexDirection: "column",
    height: 200,
    width: 200,
    margin: 5,
  },
  productcardContainer: {
    height: 300,
    width: cardContainerSize.Width,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
  },
  productcard: {
    height: resizeComponent(250, 5),
    width: resizeComponent(cardContainerSize.Width, 20),
    elevation: 1,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 3,
    backgroundColor: "white",
    margin: 5,
  },
  cardtext: {
    color: "green",
    fontSize: 17,
    fontWeight: "bold",
    padding: 5,
    position: "absolute",
    top: 0,
  },
  priceContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  headingtile: {
    height: 200,
    width: 350,
    marginRight: 40,
    marginBottom: -50,
  },
  searchbar: {
    width: 400,
    height: 50,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "transparent",
  },
});
