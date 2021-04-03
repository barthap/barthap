### Hi there 👋

> When you need to send a directory from a Windows PC to Mac, but you are too lazy to reach your mouse:
> Open WSL terminal
> ```sh
> cd /mnt/c/your_files
> tar -cvf files.tgz target_directory
> scp files.tgz username@12.34.56.78:files.tgz
> ```
> Then on Mac
> ```sh
> cd ~/your_files
> scp username@12.34.56.78:files.tgz ./files.tgz
> tar -xvf files.tgz target_directory/ && cd target_directory
> ```
> You done, but remember to remove `files.tgz` from SSH server one day...
<!--
**barthap/barthap** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
