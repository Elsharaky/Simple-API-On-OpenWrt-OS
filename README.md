# Simple-API-On-OpenWrt-OS
This is a simple built for OpenWrt OS to provide some functionalities that control the system.

## Virtual machine and OpenWrt configuration

- Make sure that the machine is attached to Bridged Adaptor.
- Change the default IP address of the machine using `uci set network.lan.ipaddr='<IP>'`.
- Set a default gateway for the machine (Router IP) using `uci set network.lan.gateway='<IP>'`.
- Set the DNS server or the lookup server of the machine (Router IP) using `uci set network.lan.dns='<IP>'`.
- Commit your changes at the end using `uci commit`.
- Reboot the device to see the changes.
