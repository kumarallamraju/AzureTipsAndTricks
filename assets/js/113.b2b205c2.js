(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{422:function(e,o,t){"use strict";t.r(o);var r=t(43),s=Object(r.a)({},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-linux?view=powershell-6?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell Core on Linux"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=iLK8SkkHHjo&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=56&?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to use PowerShell Core on Linux"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"powershell-core-on-linux-is-now-integrated-with-azure-cloud-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell-core-on-linux-is-now-integrated-with-azure-cloud-shell","aria-hidden":"true"}},[e._v("#")]),e._v(" PowerShell Core on Linux is now integrated with Azure Cloud Shell")]),e._v(" "),t("p",[e._v("Azure Cloud Shell is one of the easiest way to command-line your way through the cloud. It has the Azure CLI integrated and it just runs. Now, when you open a new Azure Cloud Shell instance (https://shell.azure.com')\">, Cloud Shell opens up an instance for you in a container that runs on Linux. And on there, it runs PowerShell Core. Isn't that awesome?")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/AzureCloudShell.png")}}),e._v(" "),t("p",[e._v("(Azure Cloud Shell)")]),e._v(" "),t("p",[e._v("Here are some quick tips of things that you can now do in Azure Cloud Shell:")]),e._v(" "),t("h5",{attrs:{id:"_1-navigate-through-your-azure-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-navigate-through-your-azure-resources","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Navigate through your Azure resources")]),e._v(" "),t("p",[e._v("Here is something that I find very useful. You can use Azure Cloud Shell to navigate through your Azure resources. You can, for instance, "),t("strong",[e._v("cd")]),e._v(" into your subscription, and see which resources you have.\nYou can just do "),t("strong",[e._v("dir allresources")]),e._v(" to see all of the resources that you have. Or narrow it down by doing something like "),t("strong",[e._v("dir webapps")]),e._v(" to see all of your Web Apps.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/NavigateThoughAzureResources.png")}}),e._v(" "),t("p",[e._v("(Navigate through Azure resources using Azure Cloud Shell)")]),e._v(" "),t("h5",{attrs:{id:"_2-commands-are-scoped-to-the-location-you-are-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-commands-are-scoped-to-the-location-you-are-in","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Commands are scoped to the location you are in")]),e._v(" "),t("p",[e._v("When you've navigated to, let's say, a resource group using "),t("strong",[e._v("cd ResourceGroups\\ResourceGroupName")]),e._v(", all of the commands that you perform are scoped to that resource group. This means that when you type in "),t("strong",[e._v("Get-AzVM")]),e._v(", which lists all of your Virtual Machines, you don't have to add the parameter "),t("strong",[e._v("-ResourceGroupName")]),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/CommandsAreScopedToLocation.png")}}),e._v(" "),t("p",[e._v("(You don't have to add the -ResourceGroupName parameter to Get-AzVM)")]),e._v(" "),t("h5",{attrs:{id:"_3-easily-remote-powershell-into-a-vm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-easily-remote-powershell-into-a-vm","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Easily Remote PowerShell into a VM")]),e._v(" "),t("p",[e._v("You can also easily using PowerShell Remoting to control another machine. First, you need to enable PowerShell Remoting. And as we are already in the context of the resource group, we don't have to put in the "),t("strong",[e._v("-ResourceGroupName")]),e._v(" parameter.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/EnablePSRemoting.png")}}),e._v(" "),t("p",[e._v("(Enable PowerShell Remoting)")]),e._v(" "),t("p",[e._v("Now, you can use "),t("strong",[e._v("Enter-AzVM")]),e._v(" to log into the VM using PowerShell Remoting.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/EnterVM.png")}}),e._v(" "),t("p",[e._v("(Enter-AzVM to log into a VM using PowerShell Remoting)")]),e._v(" "),t("p",[e._v("And once you are in the VM, you see that the prompt changes to the "),t("strong",[e._v("C:\\")]),e._v(" drive. We are now literally in the VM.\nFrom here, we can type "),t("strong",[e._v("$PSVersionTable")]),e._v(" to see which version of PowerShell we are running. And as you can see in the image below, the VM runs PowerShell Desktop, so not PowerShell Core. And it runs version 5, not 6.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/PSVersionInRemoteVM.png")}}),e._v(" "),t("p",[e._v("(Checking the PowerShell version in the VM)")]),e._v(" "),t("h5",{attrs:{id:"_4-switching-to-bash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-switching-to-bash","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Switching to Bash")]),e._v(" "),t("p",[e._v("You could always switch from a PowerShell to a Bash prompt using the menu in the top. Now, you can also switch from the PowerShell prompt to Bash, by typing "),t("strong",[e._v("bash")]),e._v(". And you can switch back by typing "),t("strong",[e._v("exit")]),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/SwitchToBash.png")}}),e._v(" "),t("p",[e._v("(Switch to Bash using the "),t("strong",[e._v("bash")]),e._v(" command)")]),e._v(" "),t("h5",{attrs:{id:"_4-check-the-powershell-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-check-the-powershell-version","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Check the PowerShell version")]),e._v(" "),t("p",[e._v("When you type in "),t("strong",[e._v("$PSVersionTable")]),e._v(", you'll see the version of PowerShell that is running, which determines the capabilities that you can use. the command is not new. But now, out-of-the-box, Cloud Shell is running the new PowerShell Core and runs on Linux.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/PowerShellVersion.png")}}),e._v(" "),t("p",[e._v("(See the PowerShell version in Azure Cloud Shell)")]),e._v(" "),t("h5",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("Azure Cloud Shell is an amazing service that allows you to use powerful commandline tools from the browser. Now, with PowerShell Core, the Cloud Shell has become even more useful. Go and check it out at https://shell.azure.com/.")])])},[],!1,null,null,null);o.default=s.exports}}]);