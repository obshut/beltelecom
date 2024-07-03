package net.btc.microservices.entities;

import com.fasterxml.jackson.annotation.JsonValue;
import jakarta.persistence.*;

import java.util.HashMap;
import java.util.Map;

@Entity
@Table(name = "networks")
public class Network {

    private String network;
    @Id
    private String url;

    public Network(String Network, String Url) {
        this.network = Network;
        this.url = Url;
    }

    public Network(Network Network) {
        this.network = Network.network;
        this.url = Network.url;
    }

    public Network() {
    }

    public String getNetwork() {
        return this.network;
    }

    public void setNetwork(String Key) {
        this.network = Key;
    }

    public String getUrl() {
        return this.url;
    }

    public void setUrl(String Value) {
        this.url = Value;
    }

}
