import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { loadMemberInfo, MemberInfo } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Member: React.FC = () => {
  const [memberInfo, setMemberInfo] = useState<MemberInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('get member info');
    const fetchMemberInfo = async () => {
      try {
        const info = await loadMemberInfo();
        setMemberInfo(info);
      } catch (error) {
        console.error('Failed to load member info:', error);
        navigate('/login'); // navigate to login if member info fails to load
      } finally {
        setLoading(false);
      }
    };

    fetchMemberInfo();
  }, [navigate]);

  return (
    <Layout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container mx-auto mt-4">
          <h2 className="text-2xl font-bold mb-4">Member Info</h2>
          <div>
            <p><strong>Id:</strong> {memberInfo?.Id}</p>
            <p><strong>Account:</strong> {memberInfo?.Account}</p>
            <p><strong>Is Admin:</strong> {memberInfo?.IsAdmin ? 'Yes' : 'No'}</p>
            <p><strong>Create At:</strong> {memberInfo?.CreateAt}</p>
            <p><strong>Update At:</strong> {memberInfo?.UpdateAt}</p>
            {/* 其他字段根据需要显示 */}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Member;
