import GitHubCalendar from 'react-github-calendar';
import { GITHUB } from '@/constants';

export default function GithubContributions() {
    const theme = {
        dark: ['#374151', '#1e4429', '#2d6d32', '#3fa641', '#53d353'],
        light: ['#F0F0F0', '#b9e6c1', '#81cd95', '#4fb66f', '#2b9c51'],
    };


    return (
        <div>
            <div className='react-github-calendar'>
                <GitHubCalendar
                    username={GITHUB.username}
                    // theme={theme}
                    blockSize={12}
                    blockMargin={4}
                    fontSize={12}
                />
            </div>
        </div>
    );
}