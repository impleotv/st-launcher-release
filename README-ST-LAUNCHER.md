# st-launcher
Application launcher and updater.  
**St-Launcher** allows you to install, start/stop and update the applications. Commands can be entered manually, with command prompt or via REST interface, over HTTP.

**St-Launcher** supports the following commands:  
- Install
- Start
- Stop
- Update
## Install

Install an application.  

```
install <version>
```
If no arguments provided, the latest application version will be installed, otherwise, *St-Launcher** will try to download the specified version.

The following steps will be executed:
- Download the installer file from github release to the working directory
- Extract the installer files

> Note, by default, the installer file will be saved in the current directory. If you want to change the location, please modify the property **workingDir** in the *\data\st-launcher-config.json* file. This file will be created on the first run of the application.



## Start

Start the application.  

```
start 
```

The following steps will be executed:
- Run **startCmd** defined in **application** section of the */data/st-launcher-config.json* in the directory specified in the **workingDir** property 

## Stop

Stop the application.  

```
stop 
```

The following steps will be executed:
- Run **stopCmd** defined in **application** section of the */data/st-launcher-config.json* in the directory specified in the **workingDir** property 


## Update

Update the application.  

```
update <version> 
```
If no arguments provided, the latest application version will be installed, otherwise, *St-Launcher** will try to download the specified version.

The following steps will be executed:


- Determine the current version of the application
- Determine the latest version of the application
- If the current version is the latest version, the update process will be skipped
- If the current version is not the latest version, the following will be done: 
    - Download the installer file from github release to the working directory
    - Extract the **docker-compose.yml** file (old file will be renamed and saved as backup)
    - Stop the application
    - Restart the application 

> Note, the update function will completely replace the existing  **docker-compose.yml** file, so if you did some manual changes to it, they will be overwritten.
## REST interface

By default, the application will run a http server on port 8040 (localhost).
If you want to change this, run the application with the following arguments:
``` 
  '-p', '--port', default: 8040
  '--bindIp', default: 'localhost'
  '--serverPort', default: 8080
```



If the current directory contains **.env** file, the above arguments can be set as environmental variables:

```
STLAUNCHER_PORT - port to access the launcher
SERVER_PORT     - port to access the controlled application
```


