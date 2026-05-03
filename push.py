import subprocess

repo_path = r"C:\Users\Pratham G\Desktop\Programming\Dhir Elevative\Landing Page for Marketing Agency (1)"

subprocess.run("git add .", cwd=repo_path, shell=True)
subprocess.run('git commit -m "Update landing page"', cwd=repo_path, shell=True)
subprocess.run("git push", cwd=repo_path, shell=True)