package com.enappd.ionreactfullapp;

import android.os.Bundle;
import co.fitcom.capacitor.Downloader.DownloaderPlugin;
import app.xplatform.capacitor.plugins.AdMob;
import com.jonoj.plugin.FusedLocation;
import com.jeep.plugin.capacitor.CapacitorVideoPlayer;
import com.abpjap.plugin.youtubeplayer.YoutubePlayer;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(AdMob.class);
      add(jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class);
      add(FusedLocation.class);
      add(DownloaderPlugin.class);
      add(CapacitorVideoPlayer.class);
      add(YoutubePlayer.class);

    }});
  }
}
