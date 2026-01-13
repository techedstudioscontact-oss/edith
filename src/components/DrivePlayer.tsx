import React from 'react';
import { Play } from 'lucide-react';

interface DrivePlayerProps {
    url: string;
    className?: string;
}

export const DrivePlayer: React.FC<DrivePlayerProps> = ({ url, className = "" }) => {
    // Helper to extract file ID from Drive URL
    const getDriveId = (link: string) => {
        const regex = /(?:file\/d\/|id=|open\?id=)([-_0-9a-zA-Z]+)/;
        const match = link.match(regex);
        return match ? match[1] : null;
    };

    const fileId = getDriveId(url);

    if (!fileId) {
        return (
            <div className={`flex items-center justify-center bg-dark-800 border border-white/10 rounded-xl text-gray-500 text-sm p-4 ${className}`}>
                Invalid Drive Link
            </div>
        );
    }

    return (
        <div className={`relative w-full aspect-video bg-black rounded-xl overflow-hidden border border-white/10 shadow-lg group ${className}`}>
            <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                className="absolute inset-0 w-full h-full"
                allow="autoplay"
                title="Portfolio Video"
            ></iframe>

            {/* Overlay for aesthetics (optional, fades out on hover/interaction if needed, but iframe usually captures events) */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]" />
        </div>
    );
};
