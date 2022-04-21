
<div align="center">
  <a >
    <img src="images/impleo_logo.png" alt="Logo" >
  </a>
</div>

# St-Launcher

Application launcher and updater.  
**St-Launcher** allows you to install, start/stop and update applications. Commands can be entered manually, using command prompt or via REST interface, over HTTP.

More info on [St-Launcher](./README-ST-LAUNCHER.md)

## System Requirements

OS: Linux x64.

## Installation 

**St-Launcher** is provided as an executable. 

1. Download 

```
wget https://github.com/impleotv/st-launcher-release/releases/download/v1.0.3/st-launcher.run
```
or get it from the [Releases](https://github.com/impleotv/st-launcher-release/releases)

2. Add execute permission:

```bash
sudo chmod +x st-launcher.run
```

3. Run: 

```
./st-launcher.run
```

***That's it! The application should be running now!***

> By default, the REST interface will be available on port **8040**. 

You may also consider making **st-launcher.run** running after reboot, so applications could be updated via REST interface.  
Any method that allows execution on reboot will do. For example, you can [use crontab](./doc/crontab-script.md).

## Direct Download link

|          | Version             | Download link                                                           | 
|:---------|:-------------------:|:------------------------------------------------------------------------|
| **st-launcher** |  1.0.3 | [st-launcher.run](https://github.com/impleotv/st-launcher-release/releases/download/v1.0.3/st-launcher.run) | 

*Released on Thu, 21 Apr, 10:17 GMT+3*

## Docs

Current server version uses the following components:  

|                  | Version             | CHANGELOG                                                               | 
|:-----------------|:-------------------:|:------------------------------------------------------------------------|
| **README**       |  1.0.3        | [README.md](./README-ST-LAUNCHER.md)                                    | 
| **CHANGELOG**    |  1.0.3        | [CHANGELOG.md](./CHANGELOG-ST-LAUNCHER.md)                              | 


----  
*Please don't hesitate to contact us at support@impleotv.com should you have any question.*