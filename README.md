### Hi there š

<details>
<summary> When you need to send a directory from a Windows PC to Mac, but you are too lazy to reach your mouse (click to expand)</summary>
  
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
  
  </details>  
  
<!--
**barthap/barthap** is a āØ _special_ āØ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- š­ Iām currently working on ...
- š± Iām currently learning ...
- šÆ Iām looking to collaborate on ...
- š¤ Iām looking for help with ...
- š¬ Ask me about ...
- š« How to reach me: ...
- š Pronouns: ...
- ā” Fun fact: ...
-->
